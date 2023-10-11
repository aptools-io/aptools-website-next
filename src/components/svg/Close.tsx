import * as React from "react";
import type { SVGProps } from "react";

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
        <path fill='#3B5998' fillRule='evenodd' d='m13.414 12 4.293-4.293a.999.999 0 1 0-1.414-1.414L12 10.586 7.707 6.293a.999.999 0 1 0-1.414 1.414L10.586 12l-4.293 4.293a.999.999 0 1 0 1.414 1.414L12 13.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12Z' clipRule='evenodd' />
    </svg>
);
export default SvgClose;
