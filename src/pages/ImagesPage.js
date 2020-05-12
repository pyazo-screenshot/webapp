import React, { useEffect, useState } from 'react';
import { Image } from '../components/Image';
import { Card } from '../components/Card';
import { Grid } from '../components/Grid';
import { Layout } from '../components/Layout';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

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

  async function getImages(pagination) {
    if (pagination.page == null) {
      return;
    }
    return axios
      .get(`/images?page=${pagination.page}&per_page=${pagination.perPage}`)
      .then(({ data }) => {
        setPagination((prev) => ({ ...prev, page: data.next_page }));
        setImages((prev) => [
          ...prev,
          ...data.results.map((image) => ({
            ...image,
            imageUrl: `${process.env.REACT_APP_API_BASE_URL}/${image.id}`,
            imageAlt: image.id,
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
      {inView.toString()}
      <Grid>
        {images.map((arst) => (
          <Grid.Row.Item key={arst.id} itemsPerRow="3">
            <Card>
              <Image src={arst.imageUrl} fullWidth />
              <Card.Body>
                <Card.Description>{arst.title}</Card.Description>
              </Card.Body>
            </Card>
          </Grid.Row.Item>
        ))}
      </Grid>
      <div ref={ref}>OVO JE SAMO FIKTIVAN ITEM DA RADI LOAD MORE</div>
      {inView.toString()}
      {/*isFetching && 'Fetching images'*/}
      {/*<Button onClick={getImages}>arst</Button>*/}
    </Layout.Container>
  );
}
