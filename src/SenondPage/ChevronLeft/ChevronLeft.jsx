import React from "react";

export const ChevronLeft = ({ className }) => {
  return (
    <svg
      className={`chevron-left ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15 18L9 12L15 6"
        stroke="#101828"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
