import React from "react";

export const Menu = ({ className }) => {
  return (
    <svg
      className={`menu ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.99998 11.9998H17M2.99998 5.99981H21M2.99998 17.9998H21"
        stroke="#101828"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.32258"
      />
    </svg>
  );
};
