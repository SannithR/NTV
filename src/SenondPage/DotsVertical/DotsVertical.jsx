import React from "react";

export const DotsVertical = ({ className }) => {
  return (
    <svg
      className={`dots-vertical ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 9.16669C9.53977 9.16669 9.16668 9.53978 9.16668 10C9.16668 10.4603 9.53977 10.8334 10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10C10.8333 9.53978 10.4602 9.16669 10 9.16669Z"
        stroke="#1570EF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M10 15C9.53977 15 9.16668 15.3731 9.16668 15.8334C9.16668 16.2936 9.53977 16.6667 10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8334C10.8333 15.3731 10.4602 15 10 15Z"
        stroke="#1570EF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M10 3.33336C9.53977 3.33336 9.16668 3.70645 9.16668 4.16669C9.16668 4.62693 9.53977 5.00002 10 5.00002C10.4602 5.00002 10.8333 4.62693 10.8333 4.16669C10.8333 3.70645 10.4602 3.33336 10 3.33336Z"
        stroke="#1570EF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
