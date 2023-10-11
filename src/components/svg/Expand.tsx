import * as React from "react";
import type { SVGProps } from "react";

const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
        <path fill='#2C406B' fillRule='evenodd' d='M19.002 4.025a1 1 0 0 1 .995 1L20 9.998A1 1 0 0 1 19 11a1 1 0 0 1-1-.999l-.002-2.585-3.291 3.291a.997.997 0 0 1-1.414 0 1 1 0 0 1 0-1.414l3.28-3.28L13.996 6A1.001 1.001 0 0 1 14 4h.005l4.997.025Zm-9.709 9.268a.999.999 0 1 1 1.414 1.414l-3.292 3.292L10 18a1 1 0 1 1 0 2h-.001l-4.975-.003a1 1 0 0 1-.999-.995L4 14.005A1 1 0 0 1 4.995 13H5a1 1 0 0 1 1 .995l.013 2.578 3.28-3.28Z' clipRule='evenodd' />
    </svg>
);
export default SvgExpand;
