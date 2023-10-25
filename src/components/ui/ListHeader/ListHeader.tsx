// React
import React, { Children, useState, useEffect } from "react";

// Styles
import classNames from "classnames";

// Components
import { SortArrowDown, SortArrowUp } from "src/components/svg";
import styles from "./ListHeader.module.scss";
import Plug from "../Plug/Plug";

const ListHeader: React.ForwardRefRenderFunction<any, IListHeaderProps> = ({ columnNames = [], columns = ["100%"], data = [], hardSorting = null, onSortingChange = null, children, className }, ref) => {
    const child: any = Children.only(children);
    const defaultSortIndex = columnNames?.findIndex((x) => x.defaultSort);
    const defaultSortType = columnNames?.[defaultSortIndex]?.defaultSortType || "desc";

    const softSorting = useState({
        key: defaultSortIndex > -1 ? columnNames?.[defaultSortIndex]?.key : columnNames?.[0]?.key,
        sort: defaultSortType
    });

    const [sorting, setSorting] = hardSorting || softSorting;

    const [sortedData, setSortedData] = useState(
        data?.length
            ? data.map((item: any, index) => {
                  return { ...item, _id: index + 1 };
              })
            : []
    );

    const classes = classNames([styles["list-header"], className]);

    const style = {
        "--list-columns": columns.join(" ")
    } as React.CSSProperties;

    const handleSort = (e, key: string) => {
        const button = e.currentTarget;
        const sortType = button.dataset.sort === "desc" ? "asc" : "desc";
        button.dataset.sort = sortType;

        if (onSortingChange) {
            onSortingChange({
                key,
                sort: sortType
            });
            return;
        }

        setSorting({
            key,
            sort: sortType
        });
    };

    const sort = (a, b) => {
        const sortByFormatter = columnNames?.find((x) => x.key === sorting.key && x.sortByFormatter);

        let x = a?.[sorting.key];
        let y = b?.[sorting.key];

        if (sortByFormatter) {
            x = sortByFormatter.formatter(a?.[sorting.key], a);
            y = sortByFormatter.formatter(b?.[sorting.key], b);
        }

        if (!Number.isNaN(Number(x)) && !Number.isNaN(Number(y))) return Number(x) - Number(y);
        if (typeof x === "string" && typeof y === "string") return x.localeCompare(y);

        return x - y;
    };

    useEffect(() => {
        const newArray = [...sortedData];
        let sorted = newArray.sort(sort);

        sorted = sorting.sort === "desc" ? sorted.reverse() : sorted;

        setSortedData([...sorted]);
    }, [sorting]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!data?.length) return <Plug noData />;

    const renderColumns = (item: IColumnName, index: number) => {
        if (item.headRemove) return <React.Fragment key={index}></React.Fragment>;
        if (item.value === "") return <span key={index}></span>;
        return (
            <React.Fragment key={index}>
                {item.headHideMobile && <div className={classNames([styles["list-header__item"], styles["hide-mobile"]])} />}
                <button className={classNames([styles["list-header__item"], { [styles.right]: item.right }, { [styles.center]: item.center }, { [styles["cant-sort"]]: item.cantSort }, { [styles.sorted]: item.key === sorting.key }])} key={index} data-sort={defaultSortType} onClick={(e) => handleSort(e, item.key)}>
                    {item.value}
                    {!item.cantSort && defaultSortIndex !== undefined && (
                        <div className={styles.sort}>
                            <SortArrowUp /> <SortArrowDown />
                        </div>
                    )}
                </button>
            </React.Fragment>
        );
    };
    return (
        <div ref={ref} style={style} className={classes}>
            <ul className={styles["list-header__items"]}>{columnNames.map(renderColumns)}</ul>
            {React.cloneElement(child as React.ReactElement<IListProps>, {
                data: sortedData,
                columnNames,
                columns
            })}
        </div>
    );
};

export default React.forwardRef(ListHeader);
