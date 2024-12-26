import Blog_Pagination from "./Blog_Pagination";
import Blog_Filter from "./Blog_Filter";
import "../components/Blog_Pagination_and_Filter.css";
import BoxReveal from "@/components/magicui/box-reveal";
import { useSelector } from "react-redux";
import { useTranslation, useState } from "@/utils/Imports";

export default function Blog_Pagination_and_Filter({ domain }) {
  const { t } = useTranslation();
  const { posts } = useSelector((state) => state.posts);
  const [filterPosts, setFilterPosts] = useState(posts);

  return (
    <>
      <div className="container mx-auto mt-6 px-2">
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          <h2 className="text-4xl md:text-5xl text-text font-bold mb-7">
            {t("read-more")}
          </h2>
        </BoxReveal>
        <div className="grid grid-cols-3 gap-3">
          {/* pagination */}
          <div className="col-span-3 md:col-span-2 order-2 md:order-1">
            <Blog_Pagination domain={domain} filterPosts={filterPosts} />
          </div>
          {/* filter */}
          <div className="col-span-3 md:col-span-1 order-1 md:order-2 mb-8">
            <Blog_Filter
              setFilterPosts={setFilterPosts}
            />
          </div>
        </div>
      </div>
    </>
  );
}
