import * as React from "react";
import type { SVGProps } from "react";

const SvgTransactionCheckpoint = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        fill='none'
        {...props}
    >
        <path
            fill='#231F20'
            fillRule='evenodd'
            d='M18 14.586c-.396.177-1.175.414-2.5.414-1.124 0-2.101-.383-3.135-.788-1.162-.455-2.364-.926-3.865-.926-1.057 0-1.876.127-2.5.298V5.416C6.396 5.239 7.177 5 8.5 5c1.124 0 2.101.383 3.135.788 1.162.455 2.364.926 3.865.926.938 0 1.776-.101 2.5-.3v8.172Zm1.268-9.906a1.79 1.79 0 0 0-1.599-.253c-.576.187-1.326.287-2.169.287-1.124 0-2.101-.383-3.135-.788C11.203 3.47 10.001 3 8.5 3c-2.887 0-4.005.952-4.2 1.144a.996.996 0 0 0-.3.713V20a1 1 0 1 0 2 0v-4.298c.395-.176 1.173-.416 2.5-.416 1.124 0 2.101.383 3.135.788 1.162.455 2.364.926 3.865.926 1.809 0 2.923-.378 3.541-.695.592-.307.959-.903.959-1.556V6.106c0-.56-.273-1.093-.732-1.426Z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgTransactionCheckpoint;
