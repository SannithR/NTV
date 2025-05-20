import React from "react";

export const CheckCircle = ({ className }) => {
  return (
    <svg
      className={`check-circle ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-2"
        d="M8.74992 14L12.2499 17.5L19.2499 10.5M25.6666 14C25.6666 20.4434 20.4432 25.6667 13.9999 25.6667C7.5566 25.6667 2.33325 20.4434 2.33325 14C2.33325 7.55672 7.5566 2.33337 13.9999 2.33337C20.4432 2.33337 25.6666 7.55672 25.6666 14Z"
        stroke="#0958D9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.33333"
      />
    </svg>
  );
};
