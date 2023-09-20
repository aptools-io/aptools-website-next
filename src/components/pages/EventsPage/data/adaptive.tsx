// Other
import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        eventsFilterWrapper: a(
            {
                [EBreakpoints.LAPTOP]: 3,
                [EBreakpoints.MIN]: 10
            },
            width
        ) as number,

        eventsListWrapper: a(
            {
                [EBreakpoints.LAPTOP]: 7,
                [EBreakpoints.MIN]: 10
            },
            width
        ) as number
    };
};

export default media;
