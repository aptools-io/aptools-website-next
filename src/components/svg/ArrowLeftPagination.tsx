import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeftPagination = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m9.516 2.14-5.5 5.5-.344.36.344.36 5.5 5.5.719-.72L5.094 8l5.141-5.14-.72-.72Z'
      fill='#868686'
    />
  </svg>
);
export default SvgArrowLeftPagination;
