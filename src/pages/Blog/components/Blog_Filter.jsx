import {
  useTranslation,
  TextInput,
  useState,
  useEffect,
} from "@/utils/Imports";
import { useDispatch, useSelector } from "react-redux";

export default function Blog_Filter({ setFilterPosts }) {
  const { posts } = useSelector((state) => state.posts);
  const { t } = useTranslation();
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    category: "all",
  });
  // console.log(sidebarData);

  // functions
  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
  };

  useEffect(() => {
    const filteredPosts = posts?.filter((post) => {
      if (sidebarData.searchTerm) {
        return post.title.toLowerCase().includes(sidebarData.searchTerm);
      }
      return true; // If no search term, include all posts
    });
    setFilterPosts(filteredPosts);
  }, [sidebarData.searchTerm]);
  //
  useEffect(() => {
    if (sidebarData.category === "all") {
      setFilterPosts(posts);
      return; // Early return if category is "all"
    }

    const filteredPosts = posts?.filter((post) => {
      return post.category.toLowerCase().includes(sidebarData.category);
    });

    setFilterPosts(filteredPosts);
  }, [sidebarData.category]);

  const handleClick = (e) => {
    setSidebarData({
      ...sidebarData,
      category: e.target.value,
    });
  };

  const categories = [
    "all",
    "hosting",
    "business",
    "technology",
    "design",
    "marketing",
    "applications",
    "programming",
    "social Media",
    "server",
    "analysis",
    "general",
    "application",
    "e-commerce",
    "websites-design",
    "e-learning",
    "business-development",
    "ride-hailing",
  ];

  return (
    <div>
      <div className="input_wrapper icon relative mb-5">
        <div className="w-full lg:w-72">
          <TextInput
            id="searchTerm"
            style={{
              fontSize: "16px",
            }}
            value={sidebarData.searchTerm}
            onChange={handleChange}
            type="text"
            sizing="sm"
            placeholder="Search..."
            className=" outline-main_color"
          />
        </div>
      </div>
      <ul className="categories flex gap-4">
        {categories?.map((category, index) => (
          <li key={index}>
            <button
              value={category}
              onClick={handleClick}
              className="flex border-none gap-x-2 items-center capitalize py-2 px-4 bg-main_color text-white rounded-lg shadow-lg shadow-blue-gray-300 hover:cursor-pointer"
            >
              {t(category)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
