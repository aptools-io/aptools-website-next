// React
import React, { useEffect, useState } from "react";

// Styles
import classNames from "classnames";

// Components
import { DifferenceArrow, ArrowLeft, ArrowRotated } from "src/components/svg";

// Util
import { getImageFromApi } from "src/scripts/util/image";
import { copyText } from "src/scripts/util/copyText";
import styles from "./ListColumn.module.scss";
import CopyText from "../CopyText/CopyText";

const ListColumn: React.FC<IListProps> = ({
    hardPageId = null,
    hardPerPage = null,
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
        descriptionFormatter = null,
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
        bold = false,
        ownLink = null,
        ownLinkValueFormatter = null,
        approxKey = null
    } = column;
    if (elementRemove) return <></>;

    const style = {
        fontSize: fontSize || null,
        gridColumn: span ? `${span} span` : null,
        fontWeight: bold ? "500" : null
    } as React.CSSProperties;

    const combinedValues = row?.combined;

    const unformattedValue = row?.[key];
    const approxed = row?.[approxKey];
    let value = !formatter
        ? unformattedValue
        : formatter(unformattedValue, row);

    if (approxed) value = `~ ${value}`;

    if (key === "_id" && hardPageId !== null && hardPerPage !== null)
        value = rowIndex + 1 + hardPageId * hardPerPage;
    const combinedValue =
        formatter && combinedValues
            ? formatter(combinedValues?.[key], row)
            : undefined;

    const unformattedReplacedValueMobile = row?.[replacedKeyMobile];
    const replacedValueMobile = !replacedFormatter
        ? unformattedReplacedValueMobile
        : replacedFormatter(unformattedReplacedValueMobile, row);
    const replacedCombinedValueMobile =
        replacedFormatter && combinedValues
            ? replacedFormatter(combinedValues?.[replacedKeyMobile], row)
            : undefined;

    let firstSymbol = row?.[symbolRef];
    let secondSymbol = null;
    if (
        typeof firstSymbol === "string" &&
        firstSymbol &&
        firstSymbol.indexOf("/") > -1
    ) {
        secondSymbol = firstSymbol.substring(firstSymbol.indexOf("/") + 1);
        firstSymbol = firstSymbol.substring(0, firstSymbol.indexOf("/"));
    }
    const description = !descriptionFormatter
        ? row?.[descriptionRef]
        : descriptionFormatter(row?.[descriptionRef], row);

    if (valueGridReplace?.length)
        return (
            <div key={columnIndex} className={styles["list-column__inner"]}>
                {valueGridReplace}
            </div>
        );

    const ownLinkVisible =
        (ownLink && ownLinkValueFormatter?.(unformattedValue, row)) ||
        (ownLink && !ownLinkValueFormatter);
    const classes = classNames([
        styles["list-column"],
        { [styles.right]: right },
        { [styles.under]: underRef },
        { [styles.inner]: inner },
        { [styles.adopt]: adoptMobile === true },
        { [styles[`adopt-${adoptMobile}px`]]: typeof adoptMobile === "number" },
        { [styles.underline]: underline },
        { [styles["own-link"]]: ownLinkVisible },
        { "prior-link": ownLinkVisible },
        /* { [styles["center"]]: key === "_id" }, */
        { [styles["main-mobile"]]: mainMobile },
        { [styles["hide-mobile"]]: hideMobile },
        { [styles.red]: colorize && unformattedValue < 0 },
        { [styles.green]: colorize && unformattedValue >= 0 },
        className
    ]);

    const ComponentWrapper = ownLink ? "a" : "div";

    return (
        <ComponentWrapper
            key={columnIndex}
            data-column-name={!column?.replacedKeyMobile ? valueRef : value}
            style={style}
            className={classes}
            {...(ownLink && ownLinkValueFormatter?.(unformattedValue, row)
                ? {
                      href: `${ownLink}/${ownLinkValueFormatter?.(
                          unformattedValue,
                          row
                      )}`
                  }
                : {})}
            {...(ownLink && !ownLinkValueFormatter
                ? { href: `${ownLink}/${unformattedValue}` }
                : {})}>
            <>
                <div className={styles["list-column__wrapper"]}>
                    {collapser && (
                        <button
                            className={classNames([
                                styles["collapse-button"],
                                { [styles.active]: collapseActive }
                            ])}
                            onClick={() => {
                                handleCollapse();
                                setCollapseActive(!collapseActive);
                            }}>
                            <div>
                                <ArrowLeft />
                            </div>
                        </button>
                    )}

                    {firstSymbol && (
                        <img
                            className={styles["list-column__icon"]}
                            src={getImageFromApi(firstSymbol)}
                            alt={firstSymbol}
                        />
                    )}
                    {secondSymbol && (
                        <img
                            className={styles["list-column__icon"]}
                            src={getImageFromApi(secondSymbol)}
                            alt={secondSymbol}
                        />
                    )}

                    {replacedKeyMobile && (
                        <div
                            className={classNames([
                                styles["list-column__info"],
                                styles["next-hide"]
                            ])}>
                            {replacedCombinedValueMobile !== undefined
                                ? `${replacedCombinedValueMobile} / `
                                : ""}
                            {replacedValueMobile}
                        </div>
                    )}

                    {column?.formatterComponent ? (
                        <div className={styles["list-column__info"]}>
                            {column?.formatterComponent(unformattedValue, row)}
                        </div>
                    ) : (
                        <div className={styles["list-column__info"]}>
                            <span>
                                {column.colorize && <DifferenceArrow />}
                                {combinedValue !== undefined &&
                                !column?.ignoreCombined
                                    ? `${combinedValue} / `
                                    : ""}
                                {value}
                            </span>
                            {description && (
                                <div
                                    className={
                                        styles["list-column__description"]
                                    }>
                                    {description}
                                </div>
                            )}
                        </div>
                    )}

                    {copy && <CopyText text={row?.[copy]} />}

                    {ownLinkVisible && <ArrowRotated />}
                </div>
                {under}
            </>
        </ComponentWrapper>
    );
};

export default ListColumn;
