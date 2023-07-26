// React
import classNames from "classnames";
import React, { useState } from "react";

import { ComingSoon, File } from "src/components/svg";

// Styles
import styles from "./Plug.module.scss";

const Plug: React.FC<{ noData?: boolean } & IComponent> = ({
    noData = false
}) => {
    const classes = classNames([
        styles["plug"], 
    ]);

    if(noData) return <div className={styles["plug__no-data"]}><File /> No Data Found</div>;

    return <div className={classes}><ComingSoon/></div>;
};

export default Plug;
