import React from "react";

export const LayersThree = ({ className }) => {
  return (
    <svg
      className={`layers-three ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_0_18128)">
        <path
          className="path"
          d="M1 9.94688L9.67801 14.2859C9.79607 14.3449 9.8551 14.3744 9.91702 14.3861C9.97186 14.3963 10.0281 14.3963 10.083 14.3861C10.1449 14.3744 10.2039 14.3449 10.322 14.2859L19 9.94688M1 14.4469L9.67801 18.7859C9.79607 18.8449 9.8551 18.8744 9.91702 18.8861C9.97186 18.8963 10.0281 18.8963 10.083 18.8861C10.1449 18.8744 10.2039 18.8449 10.322 18.7859L19 14.4469M1 5.44688L9.67801 1.10788C9.79607 1.04885 9.8551 1.01933 9.91702 1.00772C9.97186 0.997428 10.0281 0.997428 10.083 1.00772C10.1449 1.01933 10.2039 1.04885 10.322 1.10788L19 5.44688L10.322 9.78589C10.2039 9.84492 10.1449 9.87444 10.083 9.88605C10.0281 9.89634 9.97186 9.89634 9.91702 9.88605C9.8551 9.87444 9.79607 9.84492 9.67801 9.78589L1 5.44688Z"
          stroke="#3D3939"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_0_18128">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};
