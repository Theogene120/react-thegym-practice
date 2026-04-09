import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    console.log('Theogene')
    fetch(url)
      .then((res) => {
        if (!res.ok)
          throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
