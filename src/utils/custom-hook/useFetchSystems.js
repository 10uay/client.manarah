import { useState, useEffect } from "@/utils/Imports";

const useFetchSystems = (domain) => {
  const [systems, setSystems] = useState([]);
  const [loadingSystems, setLoadingSystems] = useState(false);

  useEffect(() => {
    const fetchSystems = async () => {
      setLoadingSystems(true);
      try {
        const res = await fetch(
          `${domain}/api/systems/get-data?classification=systems`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();
        if (res.ok) {
          setSystems(data.systems);
          console.log("The systems data has been fetched");
        } else {
          console.error("Error in fetching data systems");
        }
      } catch (error) {
        console.error("Error in fetching data systems (catch):", error);
      } finally {
        setLoadingSystems(false);
      }
    };

    fetchSystems();
  }, [domain]);

  return { systems, loadingSystems };
};

export default useFetchSystems;
