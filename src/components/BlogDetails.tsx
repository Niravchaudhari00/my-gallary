import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../context/AppContext";

interface Props {
  post: Post;
}
const BlogDetails: React.FC<Props> = (props) => {
  const { post } = props;
  const formateDate = (date: string) => dayjs(date).format("DD MMM YYYY");

  return (
    <div className="w-11/12 min-w-3xl  mx-auto flex flex-col flex-wrap gap-y-2 border rounded-lg shadow-md p-5 my-5">
      <h2 className="sm:text-xl md:text-2xl font-bold">{post.title}</h2>

      <div className="flex flex-wrap gap-2 font-bold">
        <p className="text-gray-400 ">By {post.author}</p>
        <Link to={`/categories/${post.category.replace(/ /g, "-")}`}>
          <p className="text-blue-400 hover:underline">{post.category}</p>
        </Link>
      </div>
      <p className="text-gray-400 flex gap-x-1 text-xs italic font-semibold">
        Posted On
        <span>{formateDate(post.date)}</span>
      </p>

      <div className="flex flex-wrap">
        <p className="text-gray-700">{post.content}</p>
        <p className="flex flex-wrap">
          {post.tags.map((tag: string, i: number) => (
            <Link
              key={i}
              to={`/tags/${tag.replace(/ /g, "-")}`}
              className="text-blue-400 hover:underline mr-3 py-0.5  "
            >
              #{tag}
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
