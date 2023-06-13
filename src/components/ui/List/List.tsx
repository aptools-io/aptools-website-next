// React
import React from "react";

// Styles
import classNames from "classnames";

// Components
import { DifferenceArrow, Copy, ArrowLeft } from "src/components/svg";

// Util
import { getDexImageFromApi } from "src/scripts/util/image";
import { copyTextToClipboard } from "src/scripts/util/copyText";
import ActiveLink from "../ActiveLink/ActiveLink";
import styles from "./List.module.scss";

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
        copyTextToClipboard(unformattedValue);
    };

    const renderListItemValue = (row, rowIndex, column, columnIndex, under, valueGridReplace, inner = false) => {
        const collapser = column?.["collapser"] || null;
        
        const key = column?.["key"] || null;
        const columnName = column?.["value"] || null;
        
        const symbolRef = column?.["symbol"] || null;
        const descriptionRef = column?.["description"] || null;
        const copy = column?.["copy"];


        //VALUES
        const unformattedValue = key !== "_id" ? row?.[key] : (rowIndex + 1);
        const value = !column["formatter"] ? unformattedValue : column["formatter"](unformattedValue);
        const combinedValue = column["formatter"] && row?.combined ? column["formatter"](row?.combined?.[key]) : undefined;

        //VALUE REPLACED
        const replacedKeyMobile = column?.["replacedKeyMobile"] || null;
        const unformattedReplacedValueMobile = row?.[replacedKeyMobile];
        const replacedValueMobile = !column["replacedFormatter"] ? unformattedReplacedValueMobile : column["replacedFormatter"](unformattedReplacedValueMobile);
        const replacedCombinedValueMobile = column["replacedFormatter"] && row?.combined ? column["replacedFormatter"](row?.combined?.[replacedKeyMobile]) : undefined;

        const symbol = row?.[symbolRef] || null;
        const description = row?.[descriptionRef] || null;

        if(valueGridReplace?.length) return (<li key={columnIndex} className={styles["list__row-inner"]}>{valueGridReplace}</li>) 
        return (
            <div 
                key={columnIndex} 
                data-column-name={!column?.["replacedKeyMobile"] ? columnName : value}
                className={classNames([
                    styles["list__column"],
                    { [styles["right"]]: column["right"] },
                    { [styles["under"]]: column["under"] },
                    { [styles["underline"]]: column["underline"] },
                    { [styles["inner"]]: inner },
                    { [styles["main-mobile"]]: column["mainMobile"] },
                    { [styles["hide-mobile"]]: column["hideMobile"] },
                    { [styles["center"]]: key === "_id" },
                    { [styles["red"]]: column["colorize"] && unformattedValue < 0 },
                    { [styles["green"]]: column["colorize"] && unformattedValue >= 0 }
                ])}
            >
                <div className={styles["list__column-wrapper"]}>
                    {collapser && <button className={styles["collapse-button"]}><div><ArrowLeft /></div></button>}
                    {column["colorize"] && <DifferenceArrow />}

                    {symbol && <img className={styles["list__column-icon"]} src={getDexImageFromApi(symbol)} alt={symbol}/>}

                    {replacedKeyMobile && <div className={classNames([styles["list__column-info"], styles["next-hide"]])}>
                        {(replacedCombinedValueMobile !== undefined) ? `${replacedCombinedValueMobile} / ` : ""}
                        {replacedValueMobile}
                    </div>}

                    {column?.["formatterComponent"] ? 
                        <div className={styles["list__column-info"]}>{column?.["formatterComponent"](unformattedValue)}</div> : 
                        <div className={styles["list__column-info"]}>
                            {(combinedValue !== undefined && !column?.["ignoreCombined"]) ? `${combinedValue} / ` : ""}
                            {value}
                            {description && <div className={styles["list__column-description"]}>{description}</div>}
                        </div>
                    }
                    
                    {copy && 
                        <button onClick={(e) => handleCopy(e, unformattedValue)} className={styles["list__column-copy"]}>
                            <Copy/>
                        </button>
                    }
                </div>
                {under}
            </div>
        );
    };

    const renderListItemColumn = (row, rowIndex, column, columnIndex) => {
        const under = column?.["under"] || [];
        const valueGridReplace = column?.["valueGridReplace"] || [];
        
        const underArray = under.map((column, columnIndex) => renderListItemValue(row, rowIndex, column, columnIndex, null, null));
        const valueGridReplaceArray = valueGridReplace.map((column, columnIndex) => renderListItemValue(row, rowIndex, column, columnIndex, null, null, true));
        return renderListItemValue(
            row, rowIndex, 
            column, 
            columnIndex, 
            underArray,
            valueGridReplaceArray
        )
    }
        
    const renderListItemRow = (row, rowIndex) => {
        const linkIndex = columnNames.findIndex(x => x.link);
        const classes = classNames([
            styles["list__row"],
            { [styles["collapse"]]: columnNames?.find(x => x?.valueGridReplace?.find(y => y.collapser) || x.collapser) },
            className
        ]);
        if(linkIndex === -1) 
        {
            return (
                <li key={rowIndex} className={classes}>
                    {columnNames.map((column, columnIndex) => renderListItemColumn(row, rowIndex, column, columnIndex))}
                </li>);
        }
        return (
            <ActiveLink href={`${columnNames[linkIndex].link}/${row[columnNames[linkIndex].key]}`} key={rowIndex}>
                <a className={classes}>{columnNames.map((column, columnIndex) => renderListItemColumn(row, rowIndex, column, columnIndex))}</a>
            </ActiveLink>);
        
    };
        
    
    return (
        <ul className={classes}>
            {data.map(renderListItemRow)}
        </ul>
    );
};

export default List;
