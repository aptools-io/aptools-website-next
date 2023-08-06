import { a } from "src/scripts/common/adaptive";
import { COLUMNS_COUNT } from "src/scripts/consts/grid";
import { shortenHashString } from "src/scripts/util/strings";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        transactionHash: a({ 
            [EBreakpoints.WIDE]: (v: string) => v, 
            [EBreakpoints.FULL]: (v: string) =>  v, 
            [EBreakpoints.LARGE]: (v: string) => shortenHashString(v, [25, 25]), 
            [EBreakpoints.LAPTOP]: (v: string) => shortenHashString(v, [15, 15]), 
            [EBreakpoints.TABLET]: (v: string) => shortenHashString(v, [10, 10]), 
            [EBreakpoints.MIN]: (v: string) => shortenHashString(v)}, 
        width) as (v: string) => string,
        transactionLeft: a({ 
            [EBreakpoints.LARGE]: 3, 
            [EBreakpoints.LAPTOP]: 3, 
            [EBreakpoints.TABLET]: 10, 
            [EBreakpoints.MIN]: 10}, 
        width) as number,
        transactionRight: a({ 
            [EBreakpoints.LARGE]: 6, 
            [EBreakpoints.LAPTOP]: 7, 
            [EBreakpoints.TABLET]: 10, 
            [EBreakpoints.MIN]: 10}, 
        width) as number,
    };
};   

export default media;