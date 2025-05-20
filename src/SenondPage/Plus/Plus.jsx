import React from "react";

export const Plus = ({ className }) => {
  return (
    <svg
      className={`plus ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 5V19M5 12H19"
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
