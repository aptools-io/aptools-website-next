import * as React from 'react';
import { SVGProps } from 'react';
const SvgSquares = (props: SVGProps<SVGSVGElement>) => (
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
      d='M15 19v-4h4l.001 4H15Zm4-6h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2ZM5 19v-4h4l.001 4H5Zm4-6H5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2Zm6-4V5h4l.001 4H15Zm4-6h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2ZM5 9V5h4l.001 4H5Zm4-6H5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSquares;
