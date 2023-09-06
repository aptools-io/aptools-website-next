import * as React from "react";
import { SVGProps } from "react";

const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13 10h-1V9c0-.55-.45-1-1-1s-1 .45-1 1v1H9c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1Zm-8 1c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6Zm15.707 8.293-3.395-3.396A7.952 7.952 0 0 0 19 11c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l3.396 3.395a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z'
            fill='#2C406B'
        />
    </svg>
);
export default SvgMaximize;
