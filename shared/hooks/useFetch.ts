import { useState, useEffect } from "react";

interface RespondProps<T> {
  data: T;
  error: boolean;
  loading: boolean;
}
const useFetch = <T>(url: string): RespondProps<T> => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (!data) {
          setData(res);
        } else {
          setData((prev) => {
            return {
              ...res,
              results: [...prev.results, ...res.results],
            };
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
