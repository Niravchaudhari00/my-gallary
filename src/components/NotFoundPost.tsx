import React from "react";

const NotFoundPost: React.FC = () => {
  return (
    <div className="absolute left-[50%] -translate-x-[50%] top-[50%]">
      <div className="flex flex-col gap-5 justify-center items-center">
        <p className="text-2xl font-semibold font-mono">No post found</p>
      </div>
    </div>
  );
};

export default NotFoundPost;
