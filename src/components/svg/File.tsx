import * as React from "react";
import type { SVGProps } from "react";

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={41}
        height={40}
        fill='none'
        {...props}>
        <path
            fill='#D9D9D9'
            fillRule='evenodd'
            d='M29.574 33.333H11.425c-.51 0-.925-.373-.925-.833v-25c0-.46.415-.834.925-.834h7.409v6.917c0 2.62 2.028 4.75 4.523 4.75H30.5V32.5c0 .46-.416.833-.926.833ZM29.915 15h-6.558c-.657 0-1.19-.635-1.19-1.417V6.666h.187L29.915 15Zm3.485-1.12-9.073-10a1.664 1.664 0 0 0-1.235-.547H11.425c-2.348 0-4.258 1.87-4.258 4.167v25c0 2.296 1.91 4.166 4.258 4.166h18.149c2.348 0 4.26-1.87 4.26-4.166V15c0-.415-.155-.814-.434-1.12Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgFile;
