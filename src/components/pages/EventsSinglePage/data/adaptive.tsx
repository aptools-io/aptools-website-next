// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        mainWrapper: a(
            {
                [EBreakpoints.LARGE]: [1, 11],
                [EBreakpoints.MIN]: [1, 12]
            },
            width
        ) as number,
        secondWrapper: a(
            {
                [EBreakpoints.LARGE]: [1, 24],
                [EBreakpoints.TABLET]: [1, 32],
                [EBreakpoints.MIN]: [1, 1]
            },
            width
        ) as number,
        thirdWrapper: a(
            {
                [EBreakpoints.LARGE]: [25, 32],
                [EBreakpoints.TABLET]: [1, 32],
                [EBreakpoints.MIN]: [1, 1]
            },
            width
        ) as number,
        contentColumns: a(
            {
                [EBreakpoints.TABLET]: 32,
                [EBreakpoints.MIN]: 1
            },
            width
        ) as number,
        slider: a(
            {
                [EBreakpoints.TABLET]: 32,
                [EBreakpoints.MIN]: 1
            },
            width
        ) as number
    };
};

export default media;
