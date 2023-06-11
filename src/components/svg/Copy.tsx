import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={16}
    fill='none'
    {...props}
  >
    <path
      fill='#3B5998'
      fillRule='evenodd'
      d='M6.333 8.667V8c0-1.103.898-2 2-2H9V3.778c0-.245-.2-.445-.445-.445H4.111c-.245 0-.444.2-.444.445v4.444c0 .245.199.445.444.445h2.222Zm0 1.333H4.111a1.78 1.78 0 0 1-1.778-1.778V3.778c0-.98.798-1.778 1.778-1.778h4.444c.98 0 1.778.797 1.778 1.778V6h2c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2h-4c-1.102 0-2-.897-2-2v-2Zm1.334-2c0-.367.299-.667.666-.667h4c.368 0 .667.3.667.667v4a.667.667 0 0 1-.667.667h-4A.668.668 0 0 1 7.667 12V8Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCopy;
