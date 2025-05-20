import React from "react";

export const ChevronDown = ({ className }) => {
  return (
    <svg
      className={`chevron-down ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15 12.5L10 7.5L5 12.5"
        stroke="#101828"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
