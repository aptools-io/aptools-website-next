import { a } from "src/scripts/common/adaptive";
import { COLUMNS_COUNT } from "src/scripts/consts/grid";
import { shortenHashString } from "src/scripts/util/strings";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        accountHash: a({ 
            [EBreakpoints.WIDE]: (v: string) => v, 
            [EBreakpoints.FULL]: (v: string) =>  shortenHashString(v, [25, 25]), 
            [EBreakpoints.LARGE]: (v: string) => shortenHashString(v, [15, 15]), 
            [EBreakpoints.LAPTOP]: (v: string) => shortenHashString(v, [25, 25]), 
            [EBreakpoints.TABLET]: (v: string) => shortenHashString(v, [15, 15]), 
            [EBreakpoints.MIN]: (v: string) => shortenHashString(v)}, 
        width) as (v: string) => string,
        accountStatsWrapper: a({ 
            [EBreakpoints.LARGE]: 3, 
            [EBreakpoints.TABLET]: 2, 
            [EBreakpoints.MIN]: 1}, 
        width) as number,
        accountStatsNet: a({ 
            [EBreakpoints.LARGE]: 1, 
            [EBreakpoints.TABLET]: 2, 
            [EBreakpoints.MIN]: 1}, 
        width) as number,
        accountStatsWallet: a({ 
            [EBreakpoints.LARGE]: 2, 
            [EBreakpoints.TABLET]: 2, 
            [EBreakpoints.MIN]: 1}, 
        width) as number,
    };
};   

export default media;