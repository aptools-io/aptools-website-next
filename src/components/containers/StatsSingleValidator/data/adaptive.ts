import { a } from "src/scripts/common/adaptive";
import { COLUMNS_COUNT } from "src/scripts/consts/grid";
import { shortenHashString } from "src/scripts/util/strings";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        validatorHash: a({ 
            [EBreakpoints.WIDE]: (v: string) => v, 
            [EBreakpoints.FULL]: (v: string) =>  shortenHashString(v, [20, 20]), 
            [EBreakpoints.LARGE]: (v: string) => shortenHashString(v, [10, 10]), 
            [EBreakpoints.LAPTOP]: (v: string) => shortenHashString(v, [10, 10]), 
            [EBreakpoints.TABLET]: (v: string) => shortenHashString(v, [5, 5]), 
            [EBreakpoints.MIN]: (v: string) => shortenHashString(v)}, 
        width) as (v: string) => string,
        transactionStats: a({ 
            [EBreakpoints.LARGE]: 7, 
            [EBreakpoints.TABLET]: 7, 
            [EBreakpoints.MIN]: 10}, 
        width) as number,
    };
};   

export default media;