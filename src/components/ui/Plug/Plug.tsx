// React
import classNames from "classnames";
import React, { useState } from "react";

import { ComingSoon } from "src/components/svg";

// Styles
import styles from "./Plug.module.scss";

const Plug: React.FC<IComponent> = () => {
    const classes = classNames([
        styles["plug"], 
    ]);

    return <div className={classes}><ComingSoon/></div>;
};

export default Plug;
