import React, { useContext } from "react";
import BlogDetails from "../../components/BlogDetails";
import Header from "../../components/Header";
import NotFoundPost from "../../components/NotFoundPost";
import Pagination from "../../components/Pagination";
import { AppContext, Post } from "../../context/AppContext";

const Blog: React.FC = () => {
  const { posts, handlePageChange, totalPages, page, loading } =
    useContext(AppContext);

  return (
    <>
      <Header title="Home" />
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

export default Blog;
