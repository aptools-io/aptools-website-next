import * as React from "react";
import type { SVGProps } from "react";

const SvgTypeWallet = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={12} height={12} fill='none' {...props}>
        <path fill='#1D1F30' fillRule='evenodd' d='M2.5 2a.5.5 0 1 0 0 1H9V2H2.5ZM10 3V1.5a.5.5 0 0 0-.5-.5h-7a1.5 1.5 0 0 0 0 3H10v2a.5.5 0 0 0 1 0V3.5a.5.5 0 0 0-.5-.5H10Z' clipRule='evenodd' />
        <path fill='#1D1F30' fillRule='evenodd' d='M1.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 0 .5.5H10V8a.5.5 0 0 1 1 0v2.5a.5.5 0 0 1-.5.5h-8A1.5 1.5 0 0 1 1 9.5v-7a.5.5 0 0 1 .5-.5Z' clipRule='evenodd' />
        <path fill='#1D1F30' fillRule='evenodd' d='M7.94 5.94A1.5 1.5 0 0 1 9 5.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9a1.5 1.5 0 0 1-1.06-2.56ZM9 6.5a.5.5 0 0 0 0 1h1.5v-1H9Z' clipRule='evenodd' />
    </svg>
);
export default SvgTypeWallet;
