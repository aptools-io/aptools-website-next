// React
import React from "react";

// Scripts
import { COLUMNS_COUNT } from "src/scripts/consts/grid";

// Styles
import styles from "./Grid.module.scss";
import classNames from "classnames";

const Grid: React.FC<IGridProps> = ({ 
    columns = COLUMNS_COUNT, 
    children,
    className
}) => {
    const style = { "--columns": columns } as React.CSSProperties;
    
    const classes = classNames([
        styles["grid"],
        className
    ]);

    return (
        <div style={style} className={classes}>
            {children}
        </div>
    );
};


export default Grid;
