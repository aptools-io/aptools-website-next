// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Styles
import classNames from "classnames";
import {
    ArrowLeftDoublePagination,
    ArrowLeftPagination
} from "src/components/svg";
import { defaultPerPage, perPages } from "src/scripts/consts/perPages";
import useLocalStorage from "src/scripts/hooks/useLocalStorage";
import styles from "./Paginator.module.scss";

// Components
import Select from "../Select/Select";

// Consts

const getPagination = (pageCount, page, shift) => {
    const pagesTemp = [];
    for (let i = 0; i < pageCount; i++) {
        if (
            (i === page - shift || i === page + shift) &&
            i !== 0 &&
            i !== pageCount - 1
        )
            pagesTemp.push("...");
        if (i > page + shift && i !== page - 1) break;

        if (i > page - shift && !(i > page + shift - 1)) pagesTemp.push(i + 1);
        else if (i === 0) pagesTemp.push(1);
        else if (i > page + shift - 1) pagesTemp.push(pageCount);
    }
    return pagesTemp;
};

const Paginator: React.FC<IPaginatorProps> = ({
    page = 1,
    total = 1000,
    perPage = defaultPerPage,
    customPaginatorWrapper = null,
    perPageKey = null,
    pageKey = null,
    setPerPage = null,
    changePerPage = false,
    shift = 3,
    checkState = null,
    onChangePage = null,
    onChangePerPage = null,
    paginatorName = "",
    noSaveStates = false,
    children,
    className,
    style
}) => {
    const [paginatorStates, setPaginatorStates] = useLocalStorage(
        "paginatorStates",
        {}
    );
    const [stateLoaded, setStateLoaded] = useState(0);
    const [currentPerPageIndex, setCurrentPerPageIndex] = useState(
        perPages.findIndex((x) => Number(perPage) === x)
    );
    const router = useRouter();

    const classes = classNames([styles.paginator, className]);

    const pageCount = Math.ceil(total / perPage);

    const pages = getPagination(pageCount, page, shift);

    const handleChangePage = (value, real = false) => {
        if (!noSaveStates && paginatorName && real) {
            setPaginatorStates({
                [paginatorName]: {
                    perPage:
                        paginatorStates?.[paginatorName]?.perPage ||
                        perPages.findIndex((x) => Number(perPage) === x),
                    page: value
                }
            });
        }

        onChangePage(value);

        if (pageKey)
            router.push(
                {
                    pathname: router.pathname,
                    query: { ...router.query, [pageKey]: value }
                },
                null,
                { shallow: true }
            );
    };

    const handleChangePerPage = (value, real) => {
        if (!noSaveStates && paginatorName && real)
            setPaginatorStates({
                [paginatorName]: {
                    perPage: value,
                    page: paginatorStates?.[paginatorName]?.page || page
                }
            });
        setCurrentPerPageIndex(value);
        setPerPage(perPages[value]);
        onChangePerPage(perPages[value]);
        if (perPageKey)
            router.push(
                {
                    pathname: router.pathname,
                    query: { ...router.query, [perPageKey]: perPages[value] }
                },
                null,
                { shallow: true }
            );
    };

    useEffect(() => {
        /* const states = JSON.parse(localStorage.getItem("paginatorStates"));
        if (states?.[paginatorName]?.perPage && setPerPage)
            handleChangePerPage(states?.[paginatorName].perPage, false);
        if (states?.[paginatorName]?.page)
            handleChangePage(states?.[paginatorName].page, false); */
    }, [checkState]);

    const renderPagination = (item, index) => {
        const handleClick = () => {
            if (page === item) return;
            handleChangePage(item, true);
        };
        return (
            <li
                key={index}
                className={classNames([
                    styles.paginator__page,
                    { [styles.active]: page === item },
                    { [styles.dots]: item === "..." }
                ])}>
                <button onClick={handleClick}>{item}</button>
            </li>
        );
    };

    return (
        <div style={style} className={classes}>
            <div className={styles.paginator__inner}>{children}</div>
            <div className={styles.paginator__wrapper}>
                {pageCount > 1 ? (
                    <ul className={styles.paginator__pages}>
                        <button
                            className={classNames([
                                styles["paginator__arrow-left"],
                                { [styles.disabled]: page === 1 }
                            ])}
                            onClick={() => handleChangePage(1)}>
                            <ArrowLeftPagination />
                        </button>
                        <button
                            className={classNames([
                                styles["paginator__arrow-left-text"],
                                { [styles.disabled]: page === 1 }
                            ])}
                            onClick={() => handleChangePage(page - 1)}>
                            previous page
                        </button>

                        {pages.map(renderPagination)}

                        <button
                            className={classNames([
                                styles["paginator__arrow-right-text"],
                                { [styles.disabled]: page === pageCount }
                            ])}
                            onClick={() => handleChangePage(page + 1)}>
                            next page
                        </button>
                        <button
                            className={classNames([
                                styles["paginator__arrow-right"],
                                { [styles.disabled]: page === pageCount }
                            ])}
                            onClick={() => handleChangePage(pageCount)}>
                            <ArrowLeftPagination />
                        </button>
                    </ul>
                ) : (
                    <div></div>
                )}
                {changePerPage && (
                    <div className={styles.paginator__perpage}>
                        <span>View on page</span>
                        <Select
                            onChange={(value) =>
                                handleChangePerPage(value, true)
                            }
                            value={currentPerPageIndex}
                            customSelectWrapper={customPaginatorWrapper}>
                            {perPages.map((item, index) => (
                                <span key={index}>{item} results</span>
                            ))}
                        </Select>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Paginator;
