import * as React from "react";
import type { SVGProps } from "react";

const SvgLogoFull = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={199} height={20} fill='none' {...props}>
        <g fill='#fff' clipPath='url(#LogoFull_svg__a)'>
            <path d='m29.892 4 7.89-4h15.78c2.63 0 3.945 1.333 3.945 4v3.999c0 2.666-1.315 3.999-3.944 3.999H33.838v8h-3.944V8h23.67V4H29.892ZM59.016 0h27.615l-7.89 4h-3.945v16h-3.944V4H59.018V0h-.002ZM89.775 0H109.5c2.629 0 3.944 1.333 3.944 4v12c0 2.669-1.315 4-3.944 4H89.775c-2.631 0-3.944-1.333-3.944-4V4c0-2.667 1.315-4 3.944-4Zm0 4v12H109.5V4H89.775ZM120.564 0h19.724c2.629 0 3.944 1.333 3.944 4v12c0 2.669-1.315 4-3.944 4h-19.724c-2.632 0-3.945-1.333-3.945-4V4c0-2.667 1.315-4 3.945-4Zm0 4v12h19.724V4h-19.724ZM167.317 20h-19.724V0h3.944v16h23.67l-7.89 4Z' />
            <path d='M191.11 4h-15.78v3.999h19.724c2.63 0 3.944 1.333 3.944 3.999v4c0 2.667-1.314 3.999-3.944 3.999h-23.67l7.89-4h15.78v-3.999H175.33c-2.631 0-3.944-1.333-3.944-4V4C171.386 1.333 172.7 0 175.33 0H199l-7.89 4ZM23.669 16V7.22L0 20v-4.843L27.613 0v20h-7.89v-4H23.669Z' />
        </g>
        <defs>
            <clipPath id='LogoFull_svg__a'>
                <path fill='#fff' d='M0 0h199v20H0z' />
            </clipPath>
        </defs>
    </svg>
);
export default SvgLogoFull;
