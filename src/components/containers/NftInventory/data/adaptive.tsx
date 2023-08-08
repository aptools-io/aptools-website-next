// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        moneyFlowWrapper: a(
            {
                [EBreakpoints.LARGE]: 8,
                [EBreakpoints.LAPTOP]: 6,
                [EBreakpoints.TABLET]: 4,
                [EBreakpoints.TABLET_MINI]: 3,
                [EBreakpoints.MOBILE]: 2,
                [EBreakpoints.MIN]: 2,
            },
            width,
        ) as number,
    };
};

export default media;
