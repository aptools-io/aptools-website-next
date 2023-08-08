import * as React from "react";
import type { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={36}
        height={36}
        fill='none'
        {...props}
    >
        <path
            fill='#fff'
            fillRule='evenodd'
            d='M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18Zm7.858-21.224V21.8h-3.144V25H29V9L7 21.125V25l18.858-10.225Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgLogo;
