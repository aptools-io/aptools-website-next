import * as React from "react";
import type { SVGProps } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={16}
        height={16}
        fill='none'
        {...props}>
        <path
            fill='#fff'
            fillRule='evenodd'
            d='M12.664 7.333h-4v-4a.666.666 0 1 0-1.333 0v4h-4a.666.666 0 1 0 0 1.334h4v4a.666.666 0 1 0 1.333 0v-4h4a.666.666 0 1 0 0-1.334Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgPlus;
