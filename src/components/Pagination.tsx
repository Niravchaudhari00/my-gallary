import React from "react";

interface Props {
  page: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}
const Pagination: React.FC<Props> = (props) => {
  const { page, totalPages, handlePageChange } = props;
  return (
    <div>
      <div className="w-11/12 mx-auto flex justify-between px-10 items-center">
        {/* buttons */}
        <div className="flex items-center gap-x-1">
          {page > 1 && (
            <button
              className="btnStyle"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="btnStyle"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        {/* page number */}
        <p>
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
