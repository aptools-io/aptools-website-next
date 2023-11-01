import * as React from "react";
import type { SVGProps } from "react";

const SvgLetter = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={25} height={24} fill='none' {...props}>
        <path fill='#fff' fillRule='evenodd' d='M19.926 18h-14c-.551 0-1-.448-1-1V7.25l7.4 5.55a.995.995 0 0 0 1.2 0l7.4-5.55V17c0 .552-.45 1-1 1Zm-.667-12-6.333 4.75L6.593 6h12.666Zm.667-2h-14c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3Z' clipRule='evenodd' />
    </svg>
);
export default SvgLetter;
