import * as React from "react";
import type { SVGProps } from "react";

const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none' {...props}>
        <path fill='#231F20' fillRule='evenodd' d='M4.665 6.667a.667.667 0 1 1 1.334 0 .667.667 0 0 1-1.334 0ZM8 6a.667.667 0 1 0 0 1.334A.667.667 0 0 0 8 6Zm2.666 0a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334Zm2.667 4c0 .367-.3.667-.667.667H5.701c-.362 0-.718.098-1.029.285l-2.007 1.204V3.333c0-.367.3-.666.667-.666h9.333c.368 0 .667.299.667.666V10Zm-.667-8.667H3.332c-1.103 0-2 .898-2 2v10a.667.667 0 0 0 1.01.572l3.016-1.81A.665.665 0 0 1 5.701 12h6.964c1.103 0 2-.897 2-2V3.333c0-1.102-.897-2-2-2Z' clipRule='evenodd' />
    </svg>
);
export default SvgMessage;
