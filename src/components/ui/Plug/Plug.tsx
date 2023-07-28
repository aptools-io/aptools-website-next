// React
import classNames from "classnames";
import React, { useState } from "react";

import { ComingSoon, File } from "src/components/svg";

// Styles
import styles from "./Plug.module.scss";

const Plug: React.FC<{ noData?: boolean, noDataAbsolute?: boolean } & IComponent> = ({
    noData = false,
    noDataAbsolute = false,
}) => {
    const classes = classNames([
        styles["plug"], 
    ]);

    if(noData) return <div className={styles["plug__no-data"]}><File /> No Data Found</div>;

    

    return <div className={classes}>{!noDataAbsolute ? <ComingSoon/> : <><File /> No Data Found</>}</div>;
};

export default Plug;
