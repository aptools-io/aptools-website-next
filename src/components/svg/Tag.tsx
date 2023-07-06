import * as React from 'react';
import { SVGProps } from 'react';
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
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
      d='M10.56 8.44a1.5 1.5 0 1 1-2.119 2.12 1.5 1.5 0 0 1 2.12-2.12Zm-4.726 4.452 6.032 6.033 7.058-7.058-6.032-6.033-7.785-.726.727 7.784Zm6.032 8.107c-.465 0-.929-.177-1.284-.53L4.165 14.05a1 1 0 0 1-.289-.614l-.872-9.344a1.002 1.002 0 0 1 1.089-1.088l9.344.872a.995.995 0 0 1 .614.288l6.417 6.417c.343.343.532.799.532 1.285 0 .486-.189.942-.532 1.285l-7.317 7.316a1.81 1.81 0 0 1-1.285.53Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTag;
