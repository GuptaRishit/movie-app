import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    axios
      .get(url)
      .then((res) => {
        if (res.data.Response === "True") {
          setData(res.data.Search ?? res.data);
        } else {
          setData([]);
          setError(res.data.Error || "No results found");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
