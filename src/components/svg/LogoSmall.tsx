import * as React from "react";
import type { SVGProps } from "react";

const SvgLogoSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} fill='none' {...props}>
        <path fill='#fff' fillRule='evenodd' d='M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15Zm6.548-17.687v5.854h-2.62v2.666h5.239V7.5L5.833 17.605v3.228l15.715-8.52Z' clipRule='evenodd' />
    </svg>
);
export default SvgLogoSmall;
