import * as React from "react";
import type { SVGProps } from "react";

const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none' {...props}>
        <path fill='#3B5998' fillRule='evenodd' d='M5.334 3.335c0 .366-.3.666-.667.666H4v8h.667c.367 0 .667.3.667.667 0 .367-.3.667-.667.667H3.334a.669.669 0 0 1-.667-.667V3.335c0-.367.3-.667.667-.667h1.333c.367 0 .667.3.667.667Zm6.669 1.616 1.876 2.667a.665.665 0 0 1-.012.783l-2 2.667a.665.665 0 1 1-1.067-.8l1.2-1.6H6.667a.666.666 0 1 1 0-1.333H12c.011 0 .021.003.032.006.008.002.017.005.026.005l-1.146-1.628a.666.666 0 1 1 1.09-.767Z' clipRule='evenodd' />
    </svg>
);
export default SvgLogout;
