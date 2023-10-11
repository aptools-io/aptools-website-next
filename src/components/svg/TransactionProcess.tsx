import * as React from "react";
import type { SVGProps } from "react";

const SvgTransactionProcess = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
        <path fill='#231F20' fillRule='evenodd' d='M5.914 5H17.91c1.98 0 3.59 1.583 3.59 3.529V11a1 1 0 1 1-2 0V8.529C19.5 7.687 18.787 7 17.91 7H5.914l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a.999.999 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L5.914 5Zm10.879 9.293a.999.999 0 0 1 1.414 0l3 3a.999.999 0 0 1 0 1.414l-3 3a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L18.086 19H6.09c-1.98 0-3.59-1.583-3.59-3.529V13a1 1 0 1 1 2 0v2.471c0 .843.713 1.529 1.59 1.529h11.996l-1.293-1.293a.999.999 0 0 1 0-1.414Z' clipRule='evenodd' />
    </svg>
);
export default SvgTransactionProcess;
