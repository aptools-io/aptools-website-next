import * as React from "react";
import type { SVGProps } from "react";

const SvgArrowLeftPagination = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={16}
        height={16}
        fill='none'
        {...props}
    >
        <path
            fill='#868686'
            d='m9.516 2.14-5.5 5.5-.344.36.344.36 5.5 5.5.719-.72L5.094 8l5.141-5.14-.72-.72Z'
        />
    </svg>
);
export default SvgArrowLeftPagination;
