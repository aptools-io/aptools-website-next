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
    slice = null,
    adoptMobile = false,
    loadingCount = null,
    loadingComponent = null,
    hardPageId = null,
    hardPerPage = null,
    className 
}) => {
    const classes = classNames([
        styles.list,
        { [styles.adopt]: adoptMobile },
        className
    ]);

    if(loadingCount) return <ul className={classes}>{new Array(loadingCount).fill(null).map((_, index) => 
        loadingComponent ? 
            <React.Fragment key={index}>{loadingComponent}</React.Fragment> : 
            <Skeleton key={index} style={{ height: "24px", minHeight: "24px" }} />)}</ul>;
    
    const processedData = slice ? data.slice(slice[0], slice[1]) : data;

    return (
        <ul className={classes}>
            {processedData.map((item, index) => 
                <ListRow 
                    key={index} 
                    row={item} 
                    rowIndex={index} 
                    columnNames={columnNames} 
                    adoptMobile={adoptMobile} 
                    hardPageId={hardPageId}
                    hardPerPage={hardPerPage}
                />)}
        </ul>
    );
};

export default List;
