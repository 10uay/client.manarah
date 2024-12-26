import { useState, useEffect } from "@/utils/Imports";

const useFetchPortfolio = (domain) => {
  const [portfolio, setPortfolio] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(false);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoadingPortfolio(true);
      try {
        const res = await fetch(
          `${domain}/api/portfolio/get-data?classification=portfolio`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();
        if (res.ok) {
          setPortfolio(data.portfolios);
          console.log("The portfolio data has been fetched");
        } else {
          console.error("Error in fetching data portfolios");
        }
      } catch (error) {
        console.error("Error in fetching data portfolios (catch):", error);
      } finally {
        setLoadingPortfolio(false);
      }
    };

    fetchPortfolio();
  }, [domain]);

  return { portfolio, loadingPortfolio };
};

export default useFetchPortfolio;
