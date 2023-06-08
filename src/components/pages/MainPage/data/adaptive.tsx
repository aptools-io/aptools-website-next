// Components
import { MainPageAptosInfo } from "src/components/pages/MainPage/parts";

// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        stats: a({ 
            [EBreakpoints.LARGE]: 3, 
            [EBreakpoints.TABLET]: 2, 
            [EBreakpoints.MIN]: 1}, 
        width) as number,
        statsTransactions: a({ 
            [EBreakpoints.LARGE]: 1, 
            [EBreakpoints.TABLET]: 2, 
            [EBreakpoints.MIN]: 1}, 
        width) as number,
        statsAdditiveComponents: () => a({ 
            [EBreakpoints.TABLET]: <></>, 
            [EBreakpoints.MIN]: <MainPageAptosInfo gridWidth={1} />}, 
        width, true) as React.ReactNode,
        projectsAdditiveComponents: () => a({ 
            [EBreakpoints.TABLET]: <MainPageAptosInfo />, 
            [EBreakpoints.MIN]: <></>}, 
        width, true) as React.ReactNode,
        dexesWrapper: a({ 
            [EBreakpoints.LARGE]: 3, 
            [EBreakpoints.LAPTOP]: 2, 
            [EBreakpoints.MIN]: 1}, 
        width) as number,
    }
}   

export default media;