import Blog_Intro from "./components/Blog_Intro";
import Blog_Pagination_and_Filter from "./components/Blog_Pagination_and_Filter";

export default function Blog({ domain }) {
  return (
    <div className="mb-10">
      <Blog_Intro domain={domain} />
      <Blog_Pagination_and_Filter domain={domain} />
    </div>
  );
}
