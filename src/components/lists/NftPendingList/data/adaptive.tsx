// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        format: a(
            {
                [EBreakpoints.LARGE]: [10, 10],
                [EBreakpoints.LAPTOP]: [8, 5],
                [EBreakpoints.TABLET]: [7, 7],
                [EBreakpoints.TABLET_MINI]: [10, 10],
                [EBreakpoints.MOBILE]: [10, 10],
                [EBreakpoints.MIN]: [10, 10],
            },
            width,
        ) as number[],
    };
};

export default media;
