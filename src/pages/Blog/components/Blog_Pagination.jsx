import Straight_Card from "./Straight_Card";
import Card from "./Card";
import { useState, Link } from "@/utils/Imports";
import { Pagination } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@aws-amplify/ui-react/styles/reset.layer.css"; // global CSS reset
import "@aws-amplify/ui-react/styles/base.layer.css"; // base styling needed for Amplify UI
import "@aws-amplify/ui-react/styles/button.layer.css"; // component specific styles
import { motion } from "@/utils/framer_motion_vars";

export default function Blog_Pagination({ filterPosts, domain }) {
  const isLargeScreen = window.innerWidth >= 1024;

  const totalPages = filterPosts?.length / 4;
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const handleNextPage = () => {
    setCurrentPageIndex(currentPageIndex + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPageIndex(currentPageIndex - 1);
  };
  const handleOnChange = (newPageIndex) => {
    setCurrentPageIndex(newPageIndex);
  };

  return (
    <motion.div
      // variants={container}
      // initial="hidden"
      // whileInView="show"
      // exit="exit"
      // viewport={{ once: true }}
      className="space-y-8"
    >
      {filterPosts &&
        filterPosts
          .slice((currentPageIndex - 1) * 4, currentPageIndex * 4)
          ?.map((info, index) => (
            <Link
              to={info.slug}
              key={`${info.id}-${index}`} // Add a unique key
            >
              <motion.div
              // variants={leftCard}
              >
                {isLargeScreen ? (
                  <Straight_Card info={info} domain={domain} />
                ) : (
                  <Card info={info} domain={domain} />
                )}
              </motion.div>
            </Link>
          ))}
      <div className="!mt-10">
        <Pagination
          currentPage={currentPageIndex}
          totalPages={totalPages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={handleOnChange}
        />
      </div>
    </motion.div>
  );
}
