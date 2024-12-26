import { useState, useEffect } from "@/utils/Imports";

const useFetchServices = (domain) => {
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      setLoadingServices(true);
      try {
        const res = await fetch(
          `${domain}/api/services/get-data?classification=services`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();
        if (res.ok) {
          setServices(data.services);
          console.log("The services data has been fetched");
        } else {
          console.error("Error in fetching data services");
        }
      } catch (error) {
        console.error("Error in fetching data services (catch):", error);
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, [domain]);

  return { services, loadingServices };
};

export default useFetchServices;
