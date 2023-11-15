import * as React from "react";
import type { SVGProps } from "react";

const SvgMarker = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none' {...props}>
        <path fill='#3B5998' fillRule='evenodd' d='M8.001 7.333a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm0-3.333a2.336 2.336 0 0 0-2.333 2.333 2.336 2.336 0 0 0 2.333 2.333 2.336 2.336 0 0 0 2.334-2.333A2.336 2.336 0 0 0 8 4Zm0 9.098c-1.116-1.057-4-4.021-4-6.483 0-2.177 1.794-3.948 4-3.948s4 1.771 4 3.948c0 2.462-2.883 5.426-4 6.482Zm0-11.764c-2.94 0-5.333 2.368-5.333 5.28 0 3.65 4.7 7.72 4.9 7.891a.666.666 0 0 0 .867 0c.2-.17 4.9-4.24 4.9-7.89 0-2.913-2.393-5.282-5.334-5.282Z' clipRule='evenodd' />
    </svg>
);
export default SvgMarker;
