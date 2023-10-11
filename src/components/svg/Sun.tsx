import * as React from "react";
import type { SVGProps } from "react";

const SvgSun = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={14} height={14} fill='none' {...props}>
        <path fill='#D9D9D9' fillRule='evenodd' d='M8.167 7a1.168 1.168 0 0 0-2.334 0 1.168 1.168 0 0 0 2.334 0Zm1.166 0A2.336 2.336 0 0 1 7 9.333 2.336 2.336 0 0 1 4.667 7 2.336 2.336 0 0 1 7 4.667 2.336 2.336 0 0 1 9.333 7ZM3.658 9.417l-.84.81a.583.583 0 0 0 .811.84l.84-.81a.583.583 0 0 0-.811-.84Zm6.685 0a.584.584 0 0 0-.811.84l.84.81a.583.583 0 0 0 .81-.84l-.84-.81ZM7 10.5a.583.583 0 0 0-.583.583v1.167a.583.583 0 1 0 1.166 0v-1.167A.583.583 0 0 0 7 10.5Zm2.937-5.753a.58.58 0 0 0 .406-.164l.839-.81a.583.583 0 0 0-.81-.84l-.84.81a.583.583 0 0 0 .405 1.004ZM3.63 2.933a.584.584 0 0 0-.81.84l.839.81a.58.58 0 0 0 .824-.014.583.583 0 0 0-.014-.825l-.839-.811ZM3.5 7a.583.583 0 0 0-.583-.583H1.75a.583.583 0 1 0 0 1.166h1.167c.322 0 .583-.26.583-.583Zm8.75-.583h-1.167a.583.583 0 1 0 0 1.166h1.167a.583.583 0 1 0 0-1.166Zm-5.833-3.5V1.75a.583.583 0 1 1 1.166 0v1.167a.583.583 0 1 1-1.166 0Z' clipRule='evenodd' />
    </svg>
);
export default SvgSun;
