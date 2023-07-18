import * as React from "react";
import type { SVGProps } from "react";

const SvgArrowLeftBig = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={33}
    height={32}
    fill='none'
    {...props}
  >
    <path
      fill='#231F20'
      fillRule='evenodd'
      d='M18.94 25.333c-.39 0-.777-.169-1.04-.497l-6.438-8a1.334 1.334 0 0 1 .015-1.69l6.666-8a1.332 1.332 0 1 1 2.048 1.707l-5.966 7.162 5.753 7.149a1.333 1.333 0 0 1-1.039 2.17Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowLeftBig;
