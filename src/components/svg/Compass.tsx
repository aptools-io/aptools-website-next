import * as React from "react";
import type { SVGProps } from "react";

const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='#9B9B9B'
      fillRule='evenodd'
      d='m10.797 13.213.714-1.742 1.692-.684-.714 1.742-1.692.684Zm4.886-4.895a1.002 1.002 0 0 0-1.1-.246l-4.212 1.702a.998.998 0 0 0-.551.548L8.075 14.58a.991.991 0 0 0 .178 1.028c.008.01.014.023.023.034.016.017.035.03.053.048a1 1 0 0 0 .713.31c.125 0 .252-.023.374-.072l4.213-1.701a1 1 0 0 0 .55-.55l1.746-4.257a.993.993 0 0 0-.242-1.102ZM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCompass;
