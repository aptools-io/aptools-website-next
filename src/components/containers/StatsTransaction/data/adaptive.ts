import { a } from "src/scripts/common/adaptive";
import { COLUMNS_COUNT } from "src/scripts/consts/grid";
import { shortenHashString } from "src/scripts/util/strings";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        transactionHash: a({ 
            [EBreakpoints.WIDE]: (v: string) => v, 
            [EBreakpoints.FULL]: (v: string) =>  shortenHashString(v, [25, 25]), 
            [EBreakpoints.LARGE]: (v: string) => shortenHashString(v, [15, 15]), 
            [EBreakpoints.LAPTOP]: (v: string) => shortenHashString(v, [10, 10]), 
            [EBreakpoints.TABLET]: (v: string) => shortenHashString(v, [10, 10]), 
            [EBreakpoints.MIN]: (v: string) => shortenHashString(v)}, 
        width) as (v: string) => string,
        transactionStats: a({ 
            [EBreakpoints.LARGE]: 6, 
            [EBreakpoints.TABLET]: 6, 
            [EBreakpoints.MIN]: 10}, 
        width) as number,
    };
};   

export default media;