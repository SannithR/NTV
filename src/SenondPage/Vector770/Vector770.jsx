import React from "react";

export const Vector770 = ({ className }) => {
  return (
    <svg
      className={`vector-770 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 23 25"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_4_14401)">
        <path
          className="path"
          d="M11.6571 19L6 6H17L11.6571 19Z"
          fill="white"
        />
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="25"
          id="filter0_d_4_14401"
          width="23"
          x="0"
          y="0"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />

          <feOffset className="fe-offset" />

          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="3" />

          <feComposite
            className="fe-composite"
            in2="hardAlpha"
            operator="out"
          />

          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />

          <feBlend
            className="fe-blend"
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_4_14401"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_4_14401"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
