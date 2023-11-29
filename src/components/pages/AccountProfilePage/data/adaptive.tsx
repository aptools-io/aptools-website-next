// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        topInfo: a(
            {
                [EBreakpoints.LARGE]: 2,
                [EBreakpoints.LAPTOP]: 4,
                [EBreakpoints.MIN]: 4
            },
            width
        ) as number
    };
};

export default media;
