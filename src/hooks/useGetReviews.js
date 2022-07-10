import { useState, useEffect } from 'react';
import { API_URL } from '../api';

export const useGetReviews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL.review)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        setError(err);
        throw new Error('Error fetch data:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { items, loading, error };
};
