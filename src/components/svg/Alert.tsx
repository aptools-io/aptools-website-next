import * as React from "react";
import type { SVGProps } from "react";

const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none' {...props}>
        <path fill='#EF8686' fillRule='evenodd' d='M7.334 5.999a.667.667 0 0 1 1.334 0v2.666a.667.667 0 0 1-1.334 0V6Zm0 4.666a.667.667 0 1 1 1.334 0 .667.667 0 0 1-1.334 0Zm6.577 1.569c-.153.27-.45.431-.796.431H2.886c-.345 0-.643-.161-.795-.431a.647.647 0 0 1 .012-.678l5.114-8.479c.311-.516 1.256-.516 1.568 0l5.114 8.479a.649.649 0 0 1 .012.678Zm1.13-1.367L9.927 2.388c-.4-.661-1.12-1.056-1.926-1.056-.807 0-1.527.395-1.926 1.056l-5.114 8.48a1.982 1.982 0 0 0-.03 2.021c.385.685 1.135 1.11 1.955 1.11h10.23c.82 0 1.57-.425 1.956-1.11a1.982 1.982 0 0 0-.03-2.022Z' clipRule='evenodd' />
    </svg>
);
export default SvgAlert;
