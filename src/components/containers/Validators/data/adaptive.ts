import { a } from "src/scripts/common/adaptive";
import { COLUMNS_COUNT } from "src/scripts/consts/grid";
import { shortenHashString } from "src/scripts/util/strings";
import { EBreakpoints } from "src/types/common/adaptive";

const media = (width: number) => {
    return {
        validatorsLeft: a(
            {
                [EBreakpoints.LARGE]: 2,
                [EBreakpoints.LAPTOP]: 3,
                [EBreakpoints.TABLET]: 10,
                [EBreakpoints.MIN]: 10
            },
            width
        ) as number,
        validatorsRightVisible: a(
            {
                [EBreakpoints.LARGE]: true,
                [EBreakpoints.LAPTOP]: true,
                [EBreakpoints.TABLET]: false,
                [EBreakpoints.MIN]: false
            },
            width
        ) as boolean
    };
};

export default media;
