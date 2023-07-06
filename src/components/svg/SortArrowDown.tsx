import * as React from 'react';
import { SVGProps } from 'react';
const SvgSortArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='none'
    width={8}
    height={8}
    viewBox='0 0 11 11'
    {...props}
  >
    <path
      fill='#9C9C9C'
      d='m1.85 7.5 3 3q.55.55 1.05 0l3.05-3.05q.35-.4.1-.75-.05-.15-.1-.2-.2-.3-.55-.3h-6q-.55 0-.7.5-.25.4.15.8Z'
    />
  </svg>
);
export default SvgSortArrowDown;
