import { a } from "src/scripts/common/adaptive";
import { EBreakpoints } from "src/types/common/adaptive";

import { columnNamesDesktop, columnsDesktop } from "./listOptionsDesktop";
import { columnNamesLarge, columnsLarge } from "./listOptionsLarge";
import { columnNamesMobile, columnsMobile } from "./listOptionsMobile";

const media = (width: number) => {
    return a(
        {
            [EBreakpoints.LARGE]: { columnNames: columnNamesDesktop, columns: columnsDesktop },
            [EBreakpoints.TABLET]: { columnNames: columnNamesLarge, columns: columnsLarge },
            [EBreakpoints.MIN]: { columnNames: columnNamesMobile, columns: columnsMobile }
        },
        width
    );
};

export default media;
