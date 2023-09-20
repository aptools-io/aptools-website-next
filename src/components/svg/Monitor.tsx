import * as React from "react";
import { SVGProps } from "react";

const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={16}
        height={16}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.336 9.333a.667.667 0 0 1-.667.667H3.335a.667.667 0 0 1-.666-.667V4c0-.367.299-.667.667-.667h9.333c.368 0 .667.3.667.667v5.333ZM12.669 2H3.336c-1.103 0-2 .897-2 2v5.333c0 1.103.897 2 2 2h4v1.334H4.669c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h6.667c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666H8.669v-1.334h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2Z'
            fill='#3B5998'
        />
    </svg>
);
export default SvgMonitor;
