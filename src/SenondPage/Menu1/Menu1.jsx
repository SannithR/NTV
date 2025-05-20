import React from "react";

export const Menu1 = ({ className }) => {
  return (
    <svg
      className={`menu-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 6.0001H21"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.32258"
      />

      <path
        className="path"
        d="M3 12H17"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.32258"
      />

      <path
        className="path"
        d="M3 18H21"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.32258"
      />
    </svg>
  );
};
