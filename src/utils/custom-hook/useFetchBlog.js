import { useState, useEffect } from "@/utils/Imports";

const useFetchBlog = (domain) => {
  const [blog, setBlog] = useState([]);
  const [loadingBlog, setLoadingBlog] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoadingBlog(true);
      try {
        const res = await fetch(`${domain}/api/post/get-posts`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          setBlog(data.posts);
          console.log("The blog data has been fetched");
        } else {
          setBlog([]);
          console.error("Error in fetching data blogs");
        }
      } catch (error) {
        setBlog([]);
        console.error("Error in fetching data blogs (catch):", error);
      } finally {
        setLoadingBlog(false);
      }
    };

    fetchBlog();
  }, [domain]);

  return { blog, loadingBlog };
};

export default useFetchBlog;
