import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

import { columnNamesDesktop, columnsDesktop } from "./listOptionsDesktop";
import { columnNamesTablet, columnsTablet } from "./listOptionsTablet";
import { columnNamesMobile, columnsMobile } from "./listOptionsMobile";

const media = (width: number) => {
    return a(
        {
            [EBreakpoints.FULL]: {
                columnNames: columnNamesDesktop,
                columns: columnsDesktop
            },
            [EBreakpoints.TABLET]: {
                columnNames: columnNamesTablet,
                columns: columnsTablet
            },
            [EBreakpoints.MIN]: {
                columnNames: columnNamesMobile,
                columns: columnsMobile
            }
        },
        width
    );
};

export default media;
