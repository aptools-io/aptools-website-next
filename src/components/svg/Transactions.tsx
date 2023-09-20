import * as React from "react";
import type { SVGProps } from "react";

const SvgTransactions = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        fill='none'
        {...props}>
        <path
            fill='#9B9B9B'
            fillRule='evenodd'
            d='M17 8H4a1 1 0 1 1 0-2h13.082l-1.558-1.21a1 1 0 0 1 1.227-1.58l3.862 3A1 1 0 0 1 20.6 7.8l-4 3a.998.998 0 0 1-1.4-.2 1 1 0 0 1 .2-1.4L17 8ZM7 15h13a1 1 0 1 1 0 2H6.918l1.558 1.21a1 1 0 0 1-1.227 1.58l-3.862-3A1 1 0 0 1 3.4 15.2l4-3a1 1 0 1 1 1.2 1.6L7 15Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgTransactions;
