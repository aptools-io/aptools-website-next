import { a } from "src/scripts/common/adaptive";
import { COLUMNS_COUNT } from "src/scripts/consts/grid";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        accountPerformance: a({ 
            [EBreakpoints.LARGE]: 4, 
            [EBreakpoints.TABLET]: 10, 
            [EBreakpoints.MIN]: 10}, 
        width) as number,
        accountTokensStats: a({ 
            [EBreakpoints.LARGE]: 6, 
            [EBreakpoints.TABLET]: 10, 
            [EBreakpoints.MIN]: 10}, 
        width) as number,
    };
};   

export default media;