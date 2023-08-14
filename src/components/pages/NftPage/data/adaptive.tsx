// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        moneyFlowWrapper: a(
            {
                [EBreakpoints.LAPTOP]: 2,
                [EBreakpoints.TABLET]: 1,
                [EBreakpoints.MIN]: 1,
            },
            width,
        ) as number,

        moneyFlowWrapperGap: a(
            {
                [EBreakpoints.LAPTOP]: 16,
                [EBreakpoints.TABLET]: 0,
                [EBreakpoints.MIN]: 0,
            },
            width,
        ) as number,

        indexLeft: a(
            {
                [EBreakpoints.LAPTOP]: (index) => index * 2,
                [EBreakpoints.TABLET]: (index) => index,
                [EBreakpoints.MIN]: (index) => index,
            },
            width,
        ) as (index: number) => number,

        indexRight: a(
            {
                [EBreakpoints.LAPTOP]: (index) => ((index + 1) * 2) - 1,
                [EBreakpoints.TABLET]: (index, additive) => index + additive,
                [EBreakpoints.MIN]: (index, additive) => index + additive,
            },
            width,
        ) as (index: number, additive: number) => number,
    };
};

export default media;
