import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // custom hook
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("out of service");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch ABORTED");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    },500);
    return () => abortCont.abort();
  }, [url]);
  return { data, isloading, error };
};

export default useFetch;
