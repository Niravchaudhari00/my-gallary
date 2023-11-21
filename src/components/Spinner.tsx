import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="absolute left-[50%] -translate-x-[50%] top-[50%]">
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
