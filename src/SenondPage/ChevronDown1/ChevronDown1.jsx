import React from "react";

export const ChevronDown1 = ({ className }) => {
  return (
    <svg
      className={`chevron-down-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
      />
    </svg>
  );
};
