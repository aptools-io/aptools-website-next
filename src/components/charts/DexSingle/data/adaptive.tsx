// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        tabs: a({ 
            [EBreakpoints.LARGE]: 1, 
            [EBreakpoints.LAPTOP]: 4, 
            [EBreakpoints.MIN]: 4}, 
        width) as number,
        chart: a({ 
            [EBreakpoints.LARGE]: 3, 
            [EBreakpoints.LAPTOP]: 4, 
            [EBreakpoints.MIN]: 4}, 
        width) as number,
    };
};   

export default media;