import * as React from "react";
import type { SVGProps } from "react";

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={17} height={16} fill='none' {...props}>
        <path fill='#3B5998' fillRule='evenodd' d='m4.925 10.582 1.985-.18 3.733-3.737-1.797-1.798-3.745 3.745-.176 1.97ZM9.74 3.974l1.797 1.797 1.298-1.3-1.796-1.796-1.299 1.3ZM3.72 11.79a.669.669 0 0 1-.193-.532l.253-2.78c.028-.304.162-.592.38-.809l5.997-5.997c.468-.47 1.317-.447 1.81.046l1.826 1.825c.51.511.531 1.323.046 1.81L7.84 11.351a1.316 1.316 0 0 1-.81.38l-2.78.252a.669.669 0 0 1-.532-.193Zm10.471 2.195c0 .367-.3.667-.667.667H4.19a.67.67 0 0 1-.667-.667c0-.366.301-.667.667-.667h9.333c.367 0 .667.301.667.667Z' clipRule='evenodd' />
    </svg>
);
export default SvgEdit;
