import * as React from "react";
import type { SVGProps } from "react";

const SvgSortArrowUp = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={8}
        height={8}
        preserveAspectRatio='none'
        viewBox='0 0 11 11'
        {...props}
    >
        <path
            fill='#9C9C9C'
            d='M8.95 3.5 5.9.45q-.5-.5-1.05 0l-3 3q-.4.4-.15.8.15.5.7.5h6q.35 0 .55-.25.05-.1.1-.25.25-.35-.1-.75Z'
        />
    </svg>
);
export default SvgSortArrowUp;
