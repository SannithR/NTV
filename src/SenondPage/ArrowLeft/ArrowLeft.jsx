import React from "react";

export const ArrowLeft = ({ className }) => {
  return (
    <svg
      className={`arrow-left ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.8333 10H4.16666M4.16666 10L10 15.8333M4.16666 10L10 4.16667"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
