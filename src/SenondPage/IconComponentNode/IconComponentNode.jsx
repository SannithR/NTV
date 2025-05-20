import React from "react";

export const IconComponentNode = ({ className }) => {
  return (
    <svg
      className={`icon-component-node ${className}`}
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
        strokeWidth="2"
      />
    </svg>
  );
};
