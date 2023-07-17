import { a } from "src/scripts/common/adaptive";
import { COLUMNS_COUNT } from "src/scripts/consts/grid";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        accountsWrapper: a({ 
            [EBreakpoints.LARGE]: 3, 
            [EBreakpoints.TABLET]: 2, 
            [EBreakpoints.MIN]: 1}, 
        width) as number,
    };
};   

export default media;