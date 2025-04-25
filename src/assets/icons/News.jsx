import React from "react";

const News = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="5" width="14" height="14" rx="3" stroke={color} />
      <path d="M5 10L19 10" stroke={color} stroke-linecap="round" />
    </svg>
  );
};

export default News;
