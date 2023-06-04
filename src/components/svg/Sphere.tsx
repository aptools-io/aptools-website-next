import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSphere = (props: SVGProps<SVGSVGElement>) => (
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
      d='M14.617 19.552A13.123 13.123 0 0 0 16.975 13h2.955a8.012 8.012 0 0 1-5.313 6.552ZM4.069 13h2.992a12.902 12.902 0 0 0 2.346 6.561A8.015 8.015 0 0 1 4.069 13Zm5.369-8.571A13.144 13.144 0 0 0 7.065 11H4.069a8.013 8.013 0 0 1 5.369-6.571ZM9.079 11c.306-3.272 1.98-5.55 2.947-6.603 1 1.071 2.648 3.328 2.933 6.603h-5.88Zm.001 2h5.882c-.306 3.277-1.984 5.555-2.95 6.608A11.018 11.018 0 0 1 9.08 13Zm10.85-2h-2.952a12.892 12.892 0 0 0-2.328-6.539A8.009 8.009 0 0 1 19.93 11ZM22 12c0-5.504-4.471-9.982-9.972-9.998l-.013-.001L12 2C6.486 2 2 6.487 2 12c0 5.514 4.486 10 10 10l.015-.001.005.001.008-.002C17.529 21.983 22 17.504 22 12Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSphere;
