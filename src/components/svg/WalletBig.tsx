import * as React from "react";
import type { SVGProps } from "react";

const SvgWalletBig = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={25} height={24} fill='none' {...props}>
        <g fill='#fff' fillRule='evenodd' clipRule='evenodd'>
            <path d='M5.926 4a1 1 0 0 0 0 2h13V4h-13Zm15 2V3a1 1 0 0 0-1-1h-14a3 3 0 1 0 0 6h15v4a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-1Z' />
            <path d='M3.926 4a1 1 0 0 1 1 1v14a1 1 0 0 0 1 1h15v-4a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-16a3 3 0 0 1-3-3V5a1 1 0 0 1 1-1Z' />
            <path d='M16.805 11.879a3 3 0 0 1 2.12-.879h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a3 3 0 0 1-2.12-5.121ZM18.925 13a1 1 0 0 0 0 2h3v-2h-3Z' />
        </g>
    </svg>
);
export default SvgWalletBig;
