import React from "react";

export const AlertCircle = ({ className }) => {
  return (
    <svg
      className={`alert-circle ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g-7" clipPath="url(#clip0_0_36)">
        <path
          className="path-2"
          d="M7.99992 5.33337V8.00004M7.99992 10.6667H8.00659M14.6666 8.00004C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00004C1.33325 4.31814 4.31802 1.33337 7.99992 1.33337C11.6818 1.33337 14.6666 4.31814 14.6666 8.00004Z"
          stroke="#4096FF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_0_36">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
