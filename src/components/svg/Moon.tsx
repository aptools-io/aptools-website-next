import * as React from 'react';
import { SVGProps } from 'react';
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={14}
    fill='none'
    {...props}
  >
    <path
      fill='#D9D9D9'
      fillRule='evenodd'
      d='M4.34 2.869a4.802 4.802 0 0 0-.801.716c-1.662 1.85-1.608 4.81.12 6.598a4.826 4.826 0 0 0 3.5 1.484 4.829 4.829 0 0 0 3.437-1.42c.191-.191.365-.396.52-.614a6.1 6.1 0 0 1-5.052-1.72A6.068 6.068 0 0 1 4.34 2.869Zm2.82 9.965h-.056a5.985 5.985 0 0 1-4.284-1.84C.676 8.774.608 5.101 2.67 2.806A5.966 5.966 0 0 1 5 1.206a.583.583 0 0 1 .756.746 4.9 4.9 0 0 0 1.132 5.135 4.928 4.928 0 0 0 5.15 1.13.583.583 0 0 1 .744.758 5.964 5.964 0 0 1-1.363 2.097 5.985 5.985 0 0 1-4.26 1.762Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMoon;
