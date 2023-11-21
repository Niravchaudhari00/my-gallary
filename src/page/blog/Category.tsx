import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import BlogDetails from "../../components/BlogDetails";
import Header from "../../components/Header";
import NotFoundPost from "../../components/NotFoundPost";
import Pagination from "../../components/Pagination";
import { AppContext, Post } from "../../context/AppContext";

const Category: React.FC = () => {
  const { posts, handlePageChange, totalPages, page, loading } =
    useContext(AppContext);
  console.log("totalPages: ", page);

  const header = useLocation().pathname.split("/")[2].split("-").join(" ");
  return (
    <>
      <Header title={header} />
      <div className="my-10">
        {posts.length > 0 ? (
          <>
            {posts.map((post: Post) => {
              return <BlogDetails key={post.id} post={post} />;
            })}
          </>
        ) : (
          <NotFoundPost />
        )}

        {!loading && posts.length > 0 ? (
          <Pagination
            page={page}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        ) : null}
      </div>
    </>
  );
};

export default Category;
