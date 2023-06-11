// React
import React from "react";

// Scripts
import { COLUMNS_COUNT, COLUMNS_ROWS_GAP } from "src/scripts/consts/grid";

// Styles
import styles from "./Grid.module.scss";
import classNames from "classnames";

const Grid: React.FC<IGridProps> = ({ 
    columns = COLUMNS_COUNT, 
    gap = null,
    fullHeight = false,
    children,
    className
}) => {
    const style = { 
        "--columns": columns,
        ...(gap !== null ? { "--gaps": `${gap}px` } : {})
    } as React.CSSProperties;
    
    const classes = classNames([
        styles["grid"],
        { [styles["full"]]: fullHeight },
        className
    ]);

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { key: columns });
        }
        return child;
    });

    return (
        <div style={style} className={classes}>
            {childrenWithProps}
        </div>
    );
};


export default React.memo(Grid);
