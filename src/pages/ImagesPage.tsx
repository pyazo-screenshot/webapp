import { useEffect, useState } from 'react';
import { Image } from '../components/Image';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../components/Grid';
import { Layout } from '../components/Layout';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://pyazo.com';

interface Pagination {
  page: number | null;
  perPage: number;
}

interface ApiImage {
  id: string;
}

interface DisplayImage extends ApiImage {
  url: string;
  alt: string;
  description: string;
  title: string;
}

interface ImagesResponse {
  next_page: number | null;
  results: ApiImage[];
}

export function ImagesPage() {
  const [pagination, setPagination] = useState<Pagination>({
    page: 0,
    perPage: 10,
  });
  const [images, setImages] = useState<DisplayImage[]>([]);
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (!inView) {
      return;
    }
    getImages(pagination);
  }, [inView, pagination]);

  function removeImage(imageId: string) {
    axios
      .delete(`/images/${imageId}`)
      .then(() => {
        setImages((prev) => prev.filter((image) => image.id !== imageId));
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function getImages(paginationParams: Pagination) {
    if (paginationParams.page == null) {
      return;
    }
    axios
      .get<ImagesResponse>(
        `${baseUrl}/images?page=${paginationParams.page}&per_page=${paginationParams.perPage}`
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
              <Card.ImageContainer>
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  <Image src={image.url} alt={image.alt} $fullWidth />
                </a>
              </Card.ImageContainer>
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
