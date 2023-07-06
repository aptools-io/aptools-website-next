import * as React from "react";
import { SVGProps } from "react";

const SvgNoImageLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={101}
    height={72}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M86.573 58.102h.5V25.158l-.734.39L.5 71.168V54.862L100.5.838V71.5H72.64V58.102h13.933Z'
      stroke='#3B5998'
    />
  </svg>
);
export default SvgNoImageLogo;
