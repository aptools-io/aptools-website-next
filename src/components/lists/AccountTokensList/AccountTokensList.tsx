// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator, Plug, Skeleton } from "src/components/ui";
import { perPages, defaultPerPage } from "src/scripts/consts/perPages";
import { accounts } from "src/scripts/api/requests";
import { setAccountTokensData, setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";
import styles from "./AccountTokensList.module.scss";


// Options
import { columnNames, columns } from "./data/listOptions";

// Consts


const AccountTokensList: React.FC<IComponent> = ({
    className 
}) => {
    const { accountTokens, accountsLoading = false } = useSelector((state: IRootState) => state.accounts);
    const { balance = [], total_coins } = accountTokens || {};
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(0);

    const hardSorting = useState<{ key: string; sort: string }>({ key: "timestamp", sort: "desc" });

    const dispatch = useDispatch();
    const router = useRouter();
    const { id = null } = router?.query || {};



    const classes = classNames([
        styles["account-tokens-list"],
        "list",
        className
    ]);

    if(accountsLoading) return <Skeleton style={{ height: 460 }} />;

    if(!accountTokens || !balance || !balance?.length) return <Plug noData />;

    return (
        <div className={classes}>
            <Paginator 
                changePerPage
                key={`${balance?.[0]?.coin}${balance?.length}`} 
                page={currentPage} 
                perPage={perPage} 
                setPerPage={setPerPage} 
                total={total_coins} 
                onChangePage={(page) => {
                    setLoading(1);
                    accounts.getAccountTokensData(id, perPage, page).then((e: unknown) => {
                        setCurrentPage(page);
                        const result = e as IApiAccountTokens;
                        dispatch(setAccountTokensData(result));
                        setLoading(0);
                    });
                }}
                onChangePerPage={(perPage) => {
                    setPerPage(perPage);
                    setLoading(1);
                    accounts.getAccountTokensData(id, perPage, currentPage).then((e: unknown) => {
                        const result = e as IApiAccountTokens;
                        dispatch(setAccountTokensData(result));
                        setLoading(0);
                    });
                }}
            >
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                    data={balance}
                    key={`${balance?.[0]?.coin}${balance?.length}`}
                    hardSorting={hardSorting}
                    onSortingChange={(sorting) => {
                        setLoading(1);
                        accounts.getAccountTokensData(id, perPage, currentPage, sorting.key, sorting.sort).then((e: unknown) => {
                            const result = e as IApiAccountTokens;
                            dispatch(setAccountTokensData(result));
                            
                            const [_, setHardSort] = hardSorting;
                            setHardSort(sorting);
                            setLoading(0);
                        });
                    }}
                >
                    <List adoptMobile loadingCount={loading * perPage} />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default AccountTokensList;
