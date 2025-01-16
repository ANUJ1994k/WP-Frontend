import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 border ${index + 1 === currentPage ? "bg-gray-300" : ""}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
