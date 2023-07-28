import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return a({ 
        [EBreakpoints.TABLET]: "215px",
        [EBreakpoints.MIN]: "125px", },
    width);
};   

export default media;