import * as React from "react";
import type { SVGProps } from "react";

const SvgCoins = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M17.153 10.02a1 1 0 0 1 1.286-.587 7 7 0 1 1-9.041 8.902 1 1 0 1 1 1.885-.67 4.999 4.999 0 1 0 6.458-6.358 1 1 0 0 1-.588-1.286ZM6 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1-1-1Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M16.008 13.168a1 1 0 0 1 1.414.01l.7.71a1 1 0 0 1-.005 1.41l-2.82 2.82a1 1 0 0 1-1.414-1.415L16 14.585l-.003-.003a1 1 0 0 1 .01-1.414Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCoins;
