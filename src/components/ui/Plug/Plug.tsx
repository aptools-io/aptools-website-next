// React
import classNames from "classnames";
import React, { useState } from "react";

import { ComingSoon, File } from "src/components/svg";

// Styles
import styles from "./Plug.module.scss";

const Plug: React.FC<{ noData?: boolean, noDataAbsolute?: boolean, noPaddings?: boolean } & IComponent> = ({
    noData = false,
    noDataAbsolute = false,
    noPaddings = false
}) => {
    const classes = classNames([
        styles.plug, 
        {[styles["no-paddings"]]: noPaddings}
    ]);

    if(noData) return <div className={classNames([styles["plug__no-data"], {[styles["no-paddings"]]: noPaddings}])}><File /> No Data Found</div>;

    

    return <div className={classes}>{!noDataAbsolute ? <ComingSoon/> : <><File /> No Data Found</>}</div>;
};

export default Plug;
