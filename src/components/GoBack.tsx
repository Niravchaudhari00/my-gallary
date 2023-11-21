import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const GoBack: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className={`${
        location.pathname === "/"
          ? "hidden"
          : "rounded-full flex justify-center items-center w-[50px] h-[50px] p-2  hover:bg-blue-100 hover:scale-105 transition-all duration-200"
      }`}
      onClick={() => navigate(-1)}
    >
      <IoChevronBackOutline size={20} />
    </button>
  );
};

export default GoBack;
