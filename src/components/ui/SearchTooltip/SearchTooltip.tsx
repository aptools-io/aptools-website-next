// React
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Magnifier } from "src/components/svg";
import { accounts } from "src/scripts/api/requests";
import ActiveLink from "../ActiveLink/ActiveLink";
import Button from "../Button/Button";
import Skeleton from "../Skeleton/Skeleton";
import fetchAccounts from "./fetch/fetchAccounts";
import { fetchBlockByHeight, fetchBlockByVersion } from "./fetch/fetchBlocks";
import fetchProjects from "./fetch/fetchProjects";
import {
    fetchTransactionByHash,
    fetchTransactionByVersion
} from "./fetch/fetchTransactions";

import styles from "./SearchTooltip.module.scss";

const SearchTooltip: React.FC<
    {
        terms: string;
        categories: string[];
        hidden?: boolean;
    } & IComponent
> = ({ terms = "", hidden = false, categories = [], className }) => {
    const searchEmpty = terms === "";

    const [account, setAccount] = useState({
        name: "",
        data: null,
        loading: false
    });

    const [blockByVersion, setBlockByVersion] = useState({
        name: "",
        data: null,
        loading: false
    });

    const [blockByHeight, setBlockByHeight] = useState({
        name: "",
        data: null,
        loading: false
    });

    const [transactionByHash, setTransactionByHash] = useState({
        name: "",
        data: null,
        loading: false
    });

    const [transactionByVersion, setTransactionByVersion] = useState({
        name: "",
        data: null,
        loading: false
    });

    const [projects, setProjects] = useState({
        name: "",
        data: null,
        loading: false
    });

    const classes = classNames([
        styles["search-tooltip"],
        { [styles["hidden"]]: hidden },
        className
    ]);

    useEffect(() => {
        if (searchEmpty) return;
        const accountsReady = categories.includes("Accounts")
            ? fetchAccounts(terms, account, setAccount)
            : null;
        const blockByVersionReady = categories.includes("Block by version")
            ? fetchBlockByVersion(terms, blockByVersion, setBlockByVersion)
            : null;
        const blockByHeightReady = categories.includes("Block by height")
            ? fetchBlockByHeight(terms, blockByHeight, setBlockByHeight)
            : null;
        const transactionByHashReady = categories.includes(
            "Transaction by hash"
        )
            ? fetchTransactionByHash(
                  terms,
                  transactionByHash,
                  setTransactionByHash
              )
            : null;
        const transactionByVersionReady = categories.includes(
            "Transaction by version"
        )
            ? fetchTransactionByVersion(
                  terms,
                  transactionByVersion,
                  setTransactionByVersion
              )
            : null;
        const projectsReady = categories.includes("Projects")
            ? fetchProjects(terms, projects, setProjects)
            : null;

        return () => {
            if (accountsReady) accountsReady();
            if (blockByVersionReady) blockByVersionReady();
            if (blockByHeightReady) blockByHeightReady();
            if (transactionByHashReady) transactionByHashReady();
            if (transactionByVersionReady) transactionByVersionReady();
            if (projectsReady) projectsReady();
        };
    }, [terms]);

    const renderItems = (item, index, link, type, loading) => {
        return (
            <li key={index} className={styles["search-tooltip__item"]}>
                {!loading ? (
                    <ActiveLink
                        href={`${link}${item}`}
                        onSamePathEmpty
                        additiveClassName={styles["search-tooltip__item-link"]}>
                        <a>
                            <span className={styles["name"]}>{item}</span>
                            <span className={styles["type"]}>{type}</span>
                        </a>
                    </ActiveLink>
                ) : (
                    <div className={styles["search-tooltip__item-skeleton"]}>
                        <Skeleton
                            style={{
                                minHeight: 15,
                                height: 15,
                                width: "calc(100% - 30px)"
                            }}
                        />
                    </div>
                )}
            </li>
        );
    };

    return (
        <div className={classes}>
            <ul className={styles["search-tooltip__items"]}>
                {account?.data &&
                    !searchEmpty &&
                    categories.includes("Accounts") && (
                        <>
                            {renderItems(
                                account.name,
                                0,
                                "/accounts/",
                                "Accounts",
                                account.loading
                            )}
                        </>
                    )}
                {blockByVersion?.data &&
                    !searchEmpty &&
                    categories.includes("Block by version") && (
                        <>
                            {renderItems(
                                blockByVersion.name,
                                1,
                                "/blocks/v-",
                                "Block by version",
                                blockByVersion.loading
                            )}
                        </>
                    )}
                {blockByHeight?.data &&
                    !searchEmpty &&
                    categories.includes("Block by height") && (
                        <>
                            {renderItems(
                                blockByHeight.name,
                                2,
                                "/blocks/",
                                "Block by height",
                                blockByHeight.loading
                            )}
                        </>
                    )}
                {transactionByHash?.data &&
                    !searchEmpty &&
                    categories.includes("Transaction by hash") && (
                        <>
                            {renderItems(
                                transactionByHash.name,
                                3,
                                "/transactions/",
                                "Transaction by hash",
                                transactionByHash.loading
                            )}
                        </>
                    )}
                {transactionByVersion?.data &&
                    !searchEmpty &&
                    categories.includes("Transaction by version") && (
                        <>
                            {renderItems(
                                transactionByVersion.name,
                                4,
                                "/transactions/",
                                "Transaction by version",
                                transactionByVersion.loading
                            )}
                        </>
                    )}
                {projects?.data?.length &&
                !searchEmpty &&
                categories.includes("Projects") ? (
                    projects?.data?.map((item, index) =>
                        renderItems(
                            item.name,
                            index + 5,
                            "/projects/",
                            "Projects",
                            projects.loading
                        )
                    )
                ) : (
                    <></>
                )}
            </ul>
        </div>
    );
};

export default SearchTooltip;
