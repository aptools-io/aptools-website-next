import * as React from "react";
import type { SVGProps } from "react";

const SvgTransactionBlock = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
        <path fill='#231F20' fillRule='evenodd' d='M11 9a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V9Zm0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm9.864 2.353c-.229.405-.675.647-1.193.647H4.327c-.518 0-.964-.242-1.192-.647a.971.971 0 0 1 .017-1.017l7.671-12.718c.467-.774 1.885-.774 2.352 0l7.672 12.718c.266.44.125.827.017 1.017Zm1.696-2.05L14.888 3.584C14.29 2.592 13.21 2 12 2c-1.21 0-2.29.592-2.888 1.584L1.44 16.303a2.973 2.973 0 0 0-.046 3.033C1.973 20.363 3.097 21 4.327 21h15.344c1.231 0 2.355-.637 2.935-1.664.54-.956.523-2.09-.046-3.033Z' clipRule='evenodd' />
    </svg>
);
export default SvgTransactionBlock;
