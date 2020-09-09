import React, { useEffect, useState } from 'react';
import { Image } from '../components/Image';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../components/Grid';
import { Layout } from '../components/Layout';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://pyazo.com';

export function ImagesPage() {
  const [pagination, setPagination] = useState({ page: 0, perPage: 10 });
  const [images, setImages] = useState([]);
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (!inView) {
      return;
    }
    getImages(pagination);
  }, [inView, pagination]);

  async function removeImage(imageId) {
    axios
      .delete(`/images/${imageId}`)
      .then(() => {
        setImages((prev) => prev.filter((image) => image.id !== imageId));
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async function getImages(pagination) {
    if (pagination.page == null) {
      return;
    }
    return axios
      .get(
        `${baseUrl}/images?page=${pagination.page}&per_page=${pagination.perPage}`
      )
      .then(({ data }) => {
        setPagination((prev) => ({ ...prev, page: data.next_page }));
        setImages((prev) => [
          ...prev,
          ...data.results.map((image) => ({
            ...image,
            url: `${baseUrl}/${image.id}`,
            alt: image.id,
            description: image.id,
            title: image.id,
          })),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Layout.Container>
      <Grid>
        {images.map((image) => (
          <Grid.Row.Item key={image.id} itemsPerRow="3">
            <Card>
              <a href={image.url} target="_blank" noreferrer noopener nofollow>
                <Image src={image.url} alt={image.alt} fullWidth />
              </a>
              <Card.Body>
                <Card.Description>{image.title}</Card.Description>
                <Button onClick={() => removeImage(image.id)}>
                  <Button.Icon src="trash-can.svg" />
                </Button>
              </Card.Body>
            </Card>
          </Grid.Row.Item>
        ))}
      </Grid>
      <div ref={ref}></div>
    </Layout.Container>
  );
}
