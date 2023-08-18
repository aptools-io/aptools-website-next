import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

import { columnNamesDesktop, columnsDesktop } from "./listOptionsDesktop";
import { columnNamesMobile, columnsMobile } from "./listOptionsMobile";

const media = (width: number) => {
    return a(
        {
            [EBreakpoints.TABLET]: {
                columnNames: columnNamesDesktop,
                columns: columnsDesktop,
            },
            [EBreakpoints.MIN]: {
                columnNames: columnNamesMobile,
                columns: columnsMobile,
            },
        },
        width,
    );
};

export default media;
