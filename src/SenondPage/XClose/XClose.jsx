import React from "react";

export const XClose = ({ className }) => {
  return (
    <svg
      className={`x-close ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15 5L5 15M5 5L15 15"
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
