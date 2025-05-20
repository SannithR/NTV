import React from "react";

export const Logo = ({ className }) => {
  return (
    <svg
      className={`logo ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-2"
        d="M2 18.24H7.52456L13.5514 30.24L28.1161 0H34.1429L16.5647 36H10.5379L2 18.24Z"
        fill="#EE0000"
      />
    </svg>
  );
};
