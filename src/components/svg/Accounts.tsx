import * as React from "react";
import type { SVGProps } from "react";

const SvgAccounts = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        fill='none'
        {...props}>
        <path
            fill='#9B9B9B'
            fillRule='evenodd'
            d='M22 19a1 1 0 1 1-2 0c0-1.654-1.346-3-3-3-.683 0-1.332.234-1.856.649.544.996.856 2.138.856 3.351a1 1 0 1 1-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 1 1-2 0c0-3.86 3.141-7 7-7 1.927 0 3.673.783 4.94 2.046A4.994 4.994 0 0 1 17 14c2.757 0 5 2.243 5 5ZM17 9a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2Zm0 4c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3ZM9 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2Zm0 6c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgAccounts;
