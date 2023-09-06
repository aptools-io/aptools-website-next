import * as React from "react";
import { SVGProps } from "react";

const SvgDifferenceArrowDouble = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={11}
        height={11}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.496 3.538 3.26 5.336a.417.417 0 0 1-.522-.65l2.5-2.011a.416.416 0 0 1 .528.005l2.5 2.083a.416.416 0 1 1-.533.64L5.495 3.538Zm-.257 2.054a.416.416 0 0 1 .528.005l2.5 2.083a.417.417 0 0 1-.534.64L5.495 6.455 3.261 8.253a.416.416 0 1 1-.522-.65l2.5-2.011Z'
            fill='#1D1F30'
        />
    </svg>
);
export default SvgDifferenceArrowDouble;
