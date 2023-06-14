// React
import React, { useState } from "react";

// Styles
import classNames from "classnames";
import styles from "./ListRow.module.scss";

// Components
import ActiveLink from "../ActiveLink/ActiveLink";
import ListColumn from "../ListColumn/ListColumn";

const ListRow: React.FC<IListProps> = ({
    columnNames = [],
    row,
    rowIndex,
    className,
    adoptMobile
}) => { 
    const linkIndex = columnNames.findIndex(x => x.link);
    const [collapse, setCollapse] = useState(false);
    const handleCollapse = () => setCollapse(!collapse);

    const classes = classNames([
        styles["list-row"],
        { [styles["adopt"]]: adoptMobile },
        { [styles["uncollapsed"]]: collapse },
        { [styles["collapse"]]: columnNames?.find(x => x?.valueGridReplace?.find(y => y.collapser) || x.collapser) },
        className
    ]);

    const renderUnder = (column: IColumnName, columnIndex: number, props): JSX.Element => <ListColumn key={columnIndex} {...{...props, column}}/>;
    const renderReplace = (column: IColumnName, columnIndex, props): JSX.Element => <ListColumn key={columnIndex} {...{...props, inner: true, column}}/>;

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
       
        return <ListColumn 
            key={columnIndex} 
            className={styles["hide"]}
            {...{
                ...props, 
                under: underArray, 
                valueGridReplace: valueGridReplaceArray
            }}
        />;
    };

    if(linkIndex === -1) 
    {
        return (
            <li key={rowIndex} className={classes}>
                {columnNames.map((column, columnIndex) => renderListItemColumn(row, rowIndex, column, columnIndex, handleCollapse))}
            </li>);
    }
    return (
        <ActiveLink href={`${columnNames[linkIndex].link}/${row[columnNames[linkIndex].key]}`} key={rowIndex}>
            <a className={classes}>{columnNames.map((column: IColumnName, columnIndex: number) => renderListItemColumn(row, rowIndex, column, columnIndex, handleCollapse))}</a>
        </ActiveLink>);
    
};

export default ListRow;
