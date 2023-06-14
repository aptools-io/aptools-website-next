// React
import React, { useState } from "react";

// Styles
import classNames from "classnames";
import styles from "./ListColumn.module.scss";

// Components
import { DifferenceArrow, Copy, ArrowLeft } from "src/components/svg";

// Util
import { getDexImageFromApi } from "src/scripts/util/image";
import { copyText } from "src/scripts/util/copyText";


const ListColumn: React.FC<IListProps> = ({
    row,
    rowIndex, 
    column, 
    columnIndex, 
    under = [], 
    valueGridReplace = [], 
    inner = false, 
    handleCollapse,
    adoptMobile,
    className
}) => {
    const [collapseActive, setCollapseActive] = useState(false);
    const { 
        collapser = null, 
        key = null, 
        value: valueRef = null, 
        symbol: symbolRef = null, 
        copy = null,
        description: descriptionRef = null, 
        formatter = null,
        replacedFormatter = null,
        replacedKeyMobile = null,
        under: underRef = null,
        right = false,
        underline = false,
        mainMobile = false,
        hideMobile = false,
        colorize = false,

        fontSize = null,
        span = null,
        elementRemove = false,
        bold = false
    } = column;
    if(elementRemove) return <></>;

    const style = {
        "fontSize": fontSize || null,
        "gridColumn": span ? `${span} span` : null,
        "fontWeight": bold ? "500" : null,
    } as React.CSSProperties;

    const combinedValues = row?.combined; 

    const unformattedValue = key !== "_id" ? row?.[key] : (row?.["_sort"] === "asc" ? (rowIndex + 1) : (row?.["_count"] - rowIndex));
    const value = !formatter ? unformattedValue : formatter(unformattedValue);
    const combinedValue = formatter && combinedValues ? formatter(combinedValues?.[key]) : undefined;

    const unformattedReplacedValueMobile = row?.[replacedKeyMobile];
    const replacedValueMobile = !replacedFormatter ? unformattedReplacedValueMobile : replacedFormatter(unformattedReplacedValueMobile);
    const replacedCombinedValueMobile = replacedFormatter && combinedValues ? replacedFormatter(combinedValues?.[replacedKeyMobile]) : undefined;

    const symbol = row?.[symbolRef];
    const description = row?.[descriptionRef];

    if(valueGridReplace?.length) return (<div key={columnIndex} className={styles["list-column__inner"]}>{valueGridReplace}</div>) 

    const classes = classNames([
        styles["list-column"],
        { [styles["right"]]: right },
        { [styles["under"]]: underRef },
        { [styles["inner"]]: inner },
        { [styles["adopt"]]: adoptMobile },
        { [styles["underline"]]: underline },
        { [styles["center"]]: key === "_id" },
        { [styles["main-mobile"]]: mainMobile },
        { [styles["hide-mobile"]]: hideMobile },
        { [styles["red"]]: colorize && unformattedValue < 0 },
        { [styles["green"]]: colorize && unformattedValue >= 0 },
        className
    ])

    return (
        <div 
            key={columnIndex} 
            data-column-name={!column?.["replacedKeyMobile"] ? valueRef : value}
            style={style}
            className={classes}
        >
            <>
                <div className={styles["list-column__wrapper"]}>
                    {collapser && 
                        <button 
                            className={classNames([
                                styles["collapse-button"], 
                                {[styles["active"]]: collapseActive}])} 
                            onClick={() => {handleCollapse(); setCollapseActive(!collapseActive);} }>
                                <div><ArrowLeft /></div>
                        </button>}
                    {column["colorize"] && <DifferenceArrow />}

                    {symbol && <img className={styles["list-column__icon"]} src={getDexImageFromApi(symbol)} alt={symbol}/>}

                    {replacedKeyMobile && <div className={classNames([styles["list-column__info"], styles["next-hide"]])}>
                        {(replacedCombinedValueMobile !== undefined) ? `${replacedCombinedValueMobile} / ` : ""}
                        {replacedValueMobile}
                    </div>}

                    {column?.["formatterComponent"] ? 
                        <div className={styles["list-column__info"]}>{column?.["formatterComponent"](unformattedValue)}</div> : 
                        <div className={styles["list-column__info"]}>
                            {(combinedValue !== undefined && !column?.["ignoreCombined"]) ? `${combinedValue} / ` : ""}
                            {value}
                            {description && <div className={styles["list-column__description"]}>{description}</div>}
                        </div>
                    }
                    
                    {copy && 
                        <button onClick={(e) => { copyText(row?.[copy]) }} className={styles["list-column__copy"]}>
                            <Copy/>
                        </button>
                    }
                </div>
                {under}
            </>
        </div>
    );
};

export default ListColumn;
