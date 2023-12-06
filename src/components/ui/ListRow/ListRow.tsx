// React
import React, { useState } from "react";

// Styles
import classNames from "classnames";
import styles from "./ListRow.module.scss";

// Components
import ActiveLink from "../ActiveLink/ActiveLink";
import ListColumn from "../ListColumn/ListColumn";

const ListRow: React.FC<IListProps> = ({ columnNames = [], hardPerPage = null, hardPageId = null, higherIndex = false, count = 0, row, rowIndex, className, adoptMobile }) => {
    const linkIndex = columnNames.findIndex((x) => x.link);
    const [collapse, setCollapse] = useState(false);
    const handleCollapse = () => setCollapse(!collapse);

    const classes = classNames([
        styles["list-row"],
        { [styles.adopt]: adoptMobile === true },
        { [styles[`adopt-${adoptMobile}px`]]: typeof adoptMobile === "number" },
        { [styles.uncollapsed]: collapse },
        {
            [styles.collapse]: columnNames?.find((x) => x?.valueGridReplace?.find((y) => y.collapser) || x.collapser)
        },
        className
    ]);

    const style = {
        zIndex: count - rowIndex
    } as React.CSSProperties;

    const renderUnder = (column: IColumnName, columnIndex: number, props): JSX.Element => <ListColumn key={columnIndex} {...{ ...props, column }} hardPageId={hardPageId} hardPerPage={hardPerPage} />;
    const renderReplace = (column: IColumnName, columnIndex, props): JSX.Element => <ListColumn key={columnIndex} {...{ ...props, inner: true, column }} hardPageId={hardPageId} hardPerPage={hardPerPage} />;

    const renderListItemColumn = (row, rowIndex, column: IColumnName, columnIndex: number, handleCollapse: () => void) => {
        const { under = [], valueGridReplace = [] } = column || {};

        const props = {
            row,
            rowIndex,
            column,
            columnIndex,
            adoptMobile,
            handleCollapse
        };

        const underArray = under.map((column: IColumnName, columnIndex: number) => renderUnder(column, columnIndex, props));
        const valueGridReplaceArray = valueGridReplace.map((column: IColumnName, columnIndex: number) => renderReplace(column, columnIndex, props));

        return (
            <ListColumn
                key={columnIndex}
                className={styles.hide}
                hardPageId={hardPageId}
                hardPerPage={hardPerPage}
                {...{
                    ...props,
                    under: underArray,
                    valueGridReplace: valueGridReplaceArray
                }}
            />
        );
    };

    const columnNamesUncollapsed = columnNames.filter((x) => !x.collapsed);
    const columnNamesCollapsed = columnNames.filter((x) => x.collapsed);
    const columnNamesNotStretch = columnNames.filter((x) => x.notStretch);
    const columnNamesItems = (
        <>
            {columnNamesUncollapsed.map((column, columnIndex) => renderListItemColumn(row, rowIndex, column, columnIndex, handleCollapse))}
            {columnNamesCollapsed?.length > 0 && (
                <div
                    className={classNames([
                        styles["list-row__collapsed"],
                        { [styles["open"]]: collapse },
                        {
                            [styles["not-stretch"]]: columnNamesNotStretch?.length > 0
                        }
                    ])}>
                    <div className={styles["list-row__collapsed-inner"]}>{columnNamesCollapsed.map((column, columnIndex) => renderListItemColumn(row, rowIndex, column, columnIndex, handleCollapse))}</div>
                </div>
            )}
        </>
    );
    if (linkIndex === -1) {
        return (
            <li key={rowIndex} className={classes} style={style}>
                {columnNamesItems}
            </li>
        );
    }
    return (
        <ActiveLink href={`${columnNames[linkIndex].link}/${row[columnNames[linkIndex].key]}`} key={rowIndex}>
            <a className={classes}>{columnNamesItems}</a>
        </ActiveLink>
    );
};

export default ListRow;
