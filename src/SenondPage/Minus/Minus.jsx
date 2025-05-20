import React from "react";

export const Minus = ({ className }) => {
  return (
    <svg
      className={`minus ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5 12H19"
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
      />
    </svg>
  );
};
