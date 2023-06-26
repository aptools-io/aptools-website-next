// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./List.module.scss";

// Components
import ListRow from "../ListRow/ListRow";
import Skeleton from "../Skeleton/Skeleton";

const List: React.FC<IListProps> = ({
    columnNames = [],
    data = [],
    adoptMobile = false,
    loadingCount = null,
    className 
}) => {
    const classes = classNames([
        styles["list"],
        { [styles["adopt"]]: adoptMobile },
        className
    ]);

    if(loadingCount) return <ul className={classes}>{new Array(loadingCount).fill(null).map((_, index) => <Skeleton key={index} style={{ height: "35px", minHeight: "35px" }} />)}</ul>;
    
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
