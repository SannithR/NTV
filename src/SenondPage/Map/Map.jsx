import React from "react";

export const Map = ({ className }) => {
  return (
    <svg
      className={`map ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_0_17738)">
        <path
          className="path"
          d="M7.50002 15L1.66669 18.3333V5L7.50002 1.66667M7.50002 15L13.3334 18.3333M7.50002 15V1.66667M13.3334 18.3333L18.3334 15V1.66667L13.3334 5M13.3334 18.3333V5M13.3334 5L7.50002 1.66667"
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_0_17738">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};
