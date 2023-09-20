import * as React from "react";
import type { SVGProps } from "react";

const SvgArrowForward = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={16}
        height={16}
        fill='none'
        {...props}>
        <path
            fill='#3B5998'
            fillRule='evenodd'
            d='M3.33 8.667h7.91L8.82 11.573a.666.666 0 1 0 1.024.854l3.334-4c.026-.032.038-.068.058-.103.016-.028.035-.052.047-.083a.657.657 0 0 0 .048-.238v-.006a.657.657 0 0 0-.048-.238c-.012-.031-.031-.055-.047-.083-.02-.035-.032-.071-.058-.103l-3.334-4a.668.668 0 0 0-.939-.085.666.666 0 0 0-.085.939l2.422 2.906H3.33a.667.667 0 0 0 0 1.334Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgArrowForward;
