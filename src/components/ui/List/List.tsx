// React
import React from "react";

// Styles
import styles from "./List.module.scss";
import classNames from "classnames";
import ActiveLink from "../ActiveLink/ActiveLink";


const List: React.FC<IListProps> = ({
    columnNames = [],
    data = [],
    className 
}) => {
    const classes = classNames([
        styles["list"],
        className
    ]);

    const renderListItemColumn = (row, column, index) => {
        const unformattedValue = row?.[column?.["key"]];
        const value = !column["formatter"] ? unformattedValue : column["formatter"](unformattedValue);
        const combinedValue = column["formatter"] && row?.combined ? column["formatter"](row?.combined?.[column?.["key"]]) : undefined;
        return (
            <div 
                key={index} 
                className={classNames([
                    styles["list__column"],
                    { [styles["right"]]: column["right"] },
                    { [styles["red"]]: column["colorize"] && unformattedValue < 0 },
                    { [styles["green"]]: column["colorize"] && unformattedValue >= 0 }
                ])}
            >
                {(combinedValue !== undefined && !column?.["ignoreCombined"]) ? `${combinedValue} / ` : ""}{value}
            </div>
        )
    }
        
    const renderListItemRow = (row, index) => {
        const linkIndex = columnNames.findIndex(x => x.link);
        if(linkIndex === -1) 
        {
            return (
                <li key={index} className={styles["list__row"]}>
                    {columnNames.map((column, index) => renderListItemColumn(row, column, index))}
                </li>)
        }
        else {
            return (
                <ActiveLink href={`${columnNames[linkIndex].link}/${row[columnNames[linkIndex].key]}`} key={index}>
                    <a className={styles["list__row"]}>{columnNames.map((column, index) => renderListItemColumn(row, column, index))}</a>
                </ActiveLink>)
        }
    }
        
    
    return (
        <ul className={classes}>
            {data.map(renderListItemRow)}
        </ul>
    );
};

export default List;
