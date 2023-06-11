// Components
import { MainPageAptosInfo } from "src/components/pages/MainPage/parts";

// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        moneyFlowWrapper: a({ 
            [EBreakpoints.LAPTOP]: 2, 
            [EBreakpoints.TABLET]: 1, 
            [EBreakpoints.MIN]: 1}, 
        width) as number,

        moneyFlowWrapperGap: a({ 
            [EBreakpoints.LAPTOP]: 16, 
            [EBreakpoints.TABLET]: 0, 
            [EBreakpoints.MIN]: 0}, 
        width) as number,
    }
}   

export default media;