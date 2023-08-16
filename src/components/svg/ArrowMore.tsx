import * as React from "react";
import type { SVGProps } from "react";

const SvgArrowMore = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={25}
        fill='none'
        {...props}>
        <path
            fill='#3B5998'
            fillRule='evenodd'
            d='M10.5 17.5a.999.999 0 0 1-.707-1.707l3.305-3.305-3.18-3.293a1 1 0 0 1 1.439-1.39l3.862 4a1 1 0 0 1-.012 1.402l-4 4a.997.997 0 0 1-.707.293Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgArrowMore;
