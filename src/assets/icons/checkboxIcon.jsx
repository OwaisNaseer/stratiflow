import React from "react";

export default function checkboxIcon({size, height, width, ...props}) {
  const {isSelected, isIndeterminate, disableAnimation, ...otherProps} = props;
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M1 3.33333L3.26409 6.06911C3.66401 6.55235 4.40495 6.55235 4.80488 6.06911L9 1"
        stroke="#3E50F7"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
