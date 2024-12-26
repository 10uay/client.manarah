import { useState, useEffect } from '@/utils/Imports';

const useFetchSolutions = (domain) => {
  const [solutions, setSolutions] = useState([]);
  const [loadingSolutions, setLoadingSolutions] = useState(false);

  useEffect(() => {
    const fetchSolutions = async () => {
      setLoadingSolutions(true);
      try {
        const res = await fetch(
          `${domain}/api/solutions/get-data?classification=solutions`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();
        if (res.ok) {
          setSolutions(data.solutions);
          console.log("The solutions data has been fetched");
        } else {
          console.error("Error in fetching data solutions");
        }
      } catch (error) {
        console.error("Error in fetching data solutions (catch):", error);
      } finally {
        setLoadingSolutions(false);
      }
    };

    fetchSolutions();
  }, [domain]);

  return { solutions, loadingSolutions };
};

export default useFetchSolutions;
