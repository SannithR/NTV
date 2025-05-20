import React from "react";

export const Line = ({ className }) => {
  return (
    <svg
      className={`line ${className}`}
      fill="none"
      height="50"
      viewBox="0 0 35 50"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4 4C8.8354 4 13.5821 5.29854 17.7441 7.75997C21.9062 10.2214 25.3308 13.7554 27.6603 17.9927C29.9898 22.2299 31.1386 27.0151 30.9867 31.8481C30.8348 36.6811 29.3878 41.3847 26.7969 45.4673"
        stroke="#32D583"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </svg>
  );
};
