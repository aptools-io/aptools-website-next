import { a } from "src/scripts/common/adaptive";
import { COLUMNS_COUNT } from "src/scripts/consts/grid";
import { shortenHashString } from "src/scripts/util/strings";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        key: a({ 
            [EBreakpoints.WIDE]: (v: string) => v, 
            [EBreakpoints.FULL]: (v: string) =>  v, 
            [EBreakpoints.LARGE]: (v: string) => v, 
            [EBreakpoints.LAPTOP]: (v: string) => shortenHashString(v, [25, 25]), 
            [EBreakpoints.TABLET]: (v: string) => shortenHashString(v, [20, 20]), 
            [EBreakpoints.TABLET_MINI]: (v: string) => shortenHashString(v, [15, 15]), 
            [EBreakpoints.MIN]: (v: string) => shortenHashString(v)}, 
        width) as (v: string) => string,
    };
};   

export default media;