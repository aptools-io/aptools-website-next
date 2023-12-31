// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        moneyFlowWrapper: a(
            {
                [EBreakpoints.LARGE]: 3,
                [EBreakpoints.TABLET]: 1,
                [EBreakpoints.MIN]: 1
            },
            width
        ) as number,

        moneyFlowWrapperGap: a(
            {
                [EBreakpoints.LARGE]: 16,
                [EBreakpoints.TABLET]: 0,
                [EBreakpoints.MIN]: 0
            },
            width
        ) as number
    };
};

export default media;
