import * as React from "react";
import type { SVGProps } from "react";

const SvgArrowRotated = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={17}
    fill='none'
    {...props}
  >
    <path
      fill='#3B5998'
      fillRule='evenodd'
      d='M11.334 5.833a.666.666 0 0 0-.667.667v3.724L5.138 4.695a.666.666 0 1 0-.942.943l5.528 5.529H6A.667.667 0 1 0 6 12.5h5.334a.666.666 0 0 0 .666-.667V6.5a.666.666 0 0 0-.666-.667Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowRotated;
