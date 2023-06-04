// React
import React from "react";

// Scripts
import { COLUMNS_COUNT } from "src/scripts/consts/grid";

// Styles
import styles from "./Grid.module.scss";

const Grid: React.FC<IGridProps> = ({ columns = COLUMNS_COUNT, children }) => {
    const style = { "--columns": columns } as React.CSSProperties;
    
    return (
        <div style={style} className={styles["grid"]}>
            {children}
        </div>
    );
};


export default Grid;
