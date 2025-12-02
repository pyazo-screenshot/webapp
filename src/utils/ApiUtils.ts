import { useState } from 'react';
import axios, { AxiosError } from 'axios';

export function useApiGet<T>(
  url: string
): [T | null, boolean, AxiosError | null] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  axios
    .get<T>(url)
    .then(({ data }) => {
      setData(data);
    })
    .catch((err: AxiosError) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });

  return [data, loading, error];
}
