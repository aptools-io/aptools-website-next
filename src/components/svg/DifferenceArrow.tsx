import * as React from "react";
import type { SVGProps } from "react";

const SvgDifferenceArrow = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={10}
        height={11}
        fill='none'
        {...props}
    >
        <path
            fill='#1D1F30'
            fillRule='evenodd'
            d='M3.34 6.333h3.289l-1.63-2.009-1.66 2.01Zm3.415.834h-3.51a.734.734 0 0 1-.66-.437.87.87 0 0 1 .107-.921l1.755-2.125a.725.725 0 0 1 1.105 0l1.756 2.124c.21.255.252.616.108.922a.733.733 0 0 1-.66.437Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgDifferenceArrow;
