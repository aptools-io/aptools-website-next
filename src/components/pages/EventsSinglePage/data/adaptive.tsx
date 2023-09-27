// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        mainWrapper: a(
            {
                [EBreakpoints.LAPTOP]: [2, 9],
                [EBreakpoints.MIN]: [1, 10]
            },
            width
        ) as number
    };
};

export default media;
