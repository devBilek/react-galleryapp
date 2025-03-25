import { useState, useEffect } from "react";
import axios from "axios";

export default function usePixabayData() {
  const [pixabayData, setPixabayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${apiKey}&q=jet+fighter+military&image_type=photo&per_page=35`
      )
      .then((response) => {
        setPixabayData(response.data.hits);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [apiKey]);

  return { pixabayData, loading, error };
}
