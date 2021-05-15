import React from "react";

function Arrow({ ...res }) {
  return (
    <svg
      {...res}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6257 6.81287L7.81287 13.6257L1 6.81287"
        stroke="#F7B803"
        strokeWidth="2"
      />
    </svg>
  );
}

export default Arrow;
