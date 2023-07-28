import * as React from "react";
import type { SVGProps } from "react";

const SvgCopyBig = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='#3B5998'
      fillRule='evenodd'
      d='M9.927 13v-1c0-1.654 1.346-3 3-3h1V5.667A.667.667 0 0 0 13.26 5H6.594a.667.667 0 0 0-.667.667v6.666c0 .368.299.667.667.667h3.333Zm0 2H6.594a2.67 2.67 0 0 1-2.667-2.667V5.667A2.67 2.67 0 0 1 6.594 3h6.666a2.67 2.67 0 0 1 2.667 2.667V9h3c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3h-6c-1.654 0-3-1.346-3-3v-3Zm2-3c0-.551.449-1 1-1h6c.552 0 1 .449 1 1v6c0 .551-.448 1-1 1h-6c-.551 0-1-.449-1-1v-6Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCopyBig;
