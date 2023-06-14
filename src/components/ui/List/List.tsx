// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./List.module.scss";

// Components
import ListRow from "../ListRow/ListRow";

const List: React.FC<IListProps> = ({
    columnNames = [],
    data = [],
    adoptMobile = false,
    className 
}) => {
    const classes = classNames([
        styles["list"],
        { [styles["adopt"]]: adoptMobile },
        className
    ]);

    
    return (
        <ul className={classes}>
            {data.map((item, index) => 
            <ListRow 
                key={index} 
                row={item} 
                rowIndex={index} 
                columnNames={columnNames} 
                adoptMobile={adoptMobile} 
            />)}
        </ul>
    );
};

export default List;
