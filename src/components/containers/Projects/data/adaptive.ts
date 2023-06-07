import { a } from "src/scripts/common/adaptive";
import { COLUMNS_COUNT } from "src/scripts/consts/grid";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        projectWrapper: a({ 
            [EBreakpoints.LARGE]: COLUMNS_COUNT, 
            [EBreakpoints.TABLET]: 9, 
            [EBreakpoints.MIN]: 10}, 
        width) as number,
        project: a({ 
            [EBreakpoints.LARGE]: 2, 
            [EBreakpoints.TABLET]: 3, 
            [EBreakpoints.MIN]: 5}, 
        width) as number,
        projectsCount: a({ 
            [EBreakpoints.LARGE]: 14, 
            [EBreakpoints.TABLET]: 7, 
            [EBreakpoints.MIN]: 5}, 
        width) as number,
    }
}   

export default media;