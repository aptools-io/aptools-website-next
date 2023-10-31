import * as React from "react";
import type { SVGProps } from "react";

const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={25} height={24} fill='none' {...props}>
        <path fill='#fff' fillRule='evenodd' d='M12.926 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3Zm6 7a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8Zm-1-11h-7V6c0-1.103.897-2 2-2s2 .897 2 2a1 1 0 1 0 2 0c0-2.206-1.794-4-4-4s-4 1.794-4 4v2h-1c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3Z' clipRule='evenodd' />
    </svg>
);
export default SvgUnlock;
