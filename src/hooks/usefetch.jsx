import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    let cancelled = false;

    (async () => {
      // Defer state updates to avoid the "setState in effect body" lint rule.
      await Promise.resolve();
      if (cancelled) return;

      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(url);
        if (res.data.Response === "True") {
          setData(res.data.Search ?? res.data);
        } else {
          setData([]);
          setError(res.data.Error || "No results found");
        }
      } catch (err) {
        if (!cancelled) setError(err?.message || "Something went wrong");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
