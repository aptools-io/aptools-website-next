// React
import React, { Children } from "react";

// Styles
import styles from "./Loader.module.scss";

const Loader: React.FC<{ wrapperHeight?: string }> = ({ wrapperHeight = null }) => {
    if(wrapperHeight) return (
        <div style={{ height: wrapperHeight }} className={styles["loader__wrapper"]}>
            <span className={styles["loader"]}></span>
        </div>
    );
    return <span className={styles["loader"]}></span>;
};

export default Loader;
