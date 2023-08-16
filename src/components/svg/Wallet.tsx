import * as React from "react";
import type { SVGProps } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={25}
        height={24}
        fill='none'
        {...props}>
        <path
            fill='#fff'
            fillRule='evenodd'
            d='M11.415 15h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1Zm6 0h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1Zm3 1c0 .551-.448 1-1 1h-14c-.552 0-1-.449-1-1v-5h16v5Zm-16-8c0-.551.448-1 1-1h14c.552 0 1 .449 1 1v1h-16V8Zm15-3h-14c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V8c0-1.654-1.346-3-3-3Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgWallet;
