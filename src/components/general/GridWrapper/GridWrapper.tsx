// React
import React from "react";

// Consts
import { COLUMNS_COUNT } from "src/scripts/consts/grid";

// Styles
import styles from "./GridWrapper.module.scss";
import classNames from "classnames";

const GridWrapper: React.FC<IGridWrapperProps> = ({ grid = {}, gridWidth = null, className, children }) => {
    const { start = 1, end = COLUMNS_COUNT } = grid;

    const gridColumn = start > end || start < 1 ? `${1} / span ${COLUMNS_COUNT}` : `${start} / span ${end - (start - 1)}`;
    const style = { "--grid-column": !gridWidth ? gridColumn : `${gridWidth} span` } as React.CSSProperties;

    const classes = classNames([
        styles["grid-wrapper"],
        className
    ]);
    

    return (
        <div style={style} className={classes}>
            {children}
        </div>
    );
};


export default React.memo(GridWrapper);
