import * as React from "react";
import type { SVGProps } from "react";

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
        <path fill='#3B5998' fillRule='evenodd' d='M13.362 17a.996.996 0 0 1-.719-.305l-3.863-4a1 1 0 0 1 .013-1.402l4-4a.999.999 0 1 1 1.414 1.414l-3.305 3.305 3.18 3.293a1 1 0 0 1-.72 1.695Z' clipRule='evenodd' />
    </svg>
);
export default SvgArrowLeft;
