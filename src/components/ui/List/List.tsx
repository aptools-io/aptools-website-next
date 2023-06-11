// React
import React from "react";

// Styles
import styles from "./List.module.scss";
import classNames from "classnames";

// Components
import ActiveLink from "../ActiveLink/ActiveLink";
import { DifferenceArrow, Copy } from "src/components/svg";

// Util
import { getDexImageFromApi } from "src/scripts/util/image";
import { copyTextToClipboard } from "src/scripts/util/copyText"

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

    const handleCopy = (e, unformattedValue) => {
        e.stopPropagation();
        copyTextToClipboard(unformattedValue)
    }

    const renderListItemColumn = (row, column, columnIndex, rowIndex) => {
        const key = column?.["key"] || null;
        const columnName = column?.["value"] || null;
        
        const symbolRef = column?.["symbol"] || null;
        const descriptionRef = column?.["description"] || null;
        const copy = column?.["copy"];

        const unformattedValue = key !== "_id" ? row?.[key] : (row?.[key] + 1);
        const value = !column["formatter"] ? unformattedValue : column["formatter"](unformattedValue);
        const combinedValue = column["formatter"] && row?.combined ? column["formatter"](row?.combined?.[key]) : undefined;

        const symbol = row?.[symbolRef] || null;
        const description = row?.[descriptionRef] || null;

        return (
            <div 
                key={columnIndex} 
                data-column-name={columnName}
                className={classNames([
                    styles["list__column"],
                    { [styles["right"]]: column["right"] },
                    { [styles["main-mobile"]]: column["mainMobile"] },
                    { [styles["hide-mobile"]]: column["hideMobile"] },
                    { [styles["center"]]: key === "_id" },
                    { [styles["red"]]: column["colorize"] && unformattedValue < 0 },
                    { [styles["green"]]: column["colorize"] && unformattedValue >= 0 }
                ])}
            >
                <div className={styles["list__column-wrapper"]}>
                    {column["colorize"] && <DifferenceArrow />}

                    {symbol && <img className={styles["list__column-icon"]} src={getDexImageFromApi(symbol)} alt={symbol}/>}

                    {column?.["formatterComponent"] ? 
                        <div className={styles["list__column-info"]}>{column?.["formatterComponent"](unformattedValue)}</div> : 
                        <div className={styles["list__column-info"]}>
                            {(combinedValue !== undefined && !column?.["ignoreCombined"]) ? `${combinedValue} / ` : ""}{value}
                            {description && <div className={styles["list__column-description"]}>{description}</div>}
                        </div>
                    }
                    
                    {copy && 
                        <button onClick={(e) => handleCopy(e, unformattedValue)} className={styles["list__column-copy"]}>
                            <Copy/>
                        </button>
                    }
                </div>
            </div>
        )
    }
        
    const renderListItemRow = (row, rowIndex) => {
        const linkIndex = columnNames.findIndex(x => x.link);
        if(linkIndex === -1) 
        {
            return (
                <li key={rowIndex} className={styles["list__row"]}>
                    {columnNames.map((column, columnIndex) => renderListItemColumn(row, column, columnIndex, rowIndex))}
                </li>)
        }
        else {
            return (
                <ActiveLink href={`${columnNames[linkIndex].link}/${row[columnNames[linkIndex].key]}`} key={rowIndex}>
                    <a className={styles["list__row"]}>{columnNames.map((column, columnIndex) => renderListItemColumn(row, column, columnIndex, rowIndex))}</a>
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
