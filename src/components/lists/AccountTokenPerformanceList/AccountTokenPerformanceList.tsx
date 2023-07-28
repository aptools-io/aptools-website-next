// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator, Skeleton } from "src/components/ui";
import { perPages, defaultPerPage } from "src/scripts/consts/perPages";
import { accounts } from "src/scripts/api/requests";
import { setAccountProfitabilitiesData } from "src/scripts/redux/slices/accountsSlice";
import styles from "./AccountTokenPerformanceList.module.scss";


// Options
import { columnNames, columns } from "./data/listOptions";

// Consts


const AccountTokenPerformanceList: React.FC<IComponent> = ({
    className 
}) => {
    const { accountProfitabilities, accountsLoading = false  } = useSelector((state: IRootState) => state.accounts);
    const { profitability = [], total_pages, currentPage: dataCurrentPage = 1 } = accountProfitabilities || {};
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(dataCurrentPage);
    const [loading, setLoading] = useState(0);

    const hardSorting = useState<{ key: string; sort: string }>({ key: "profit_percentage", sort: "desc" });


    const dispatch = useDispatch();
    const router = useRouter();
    const { id = null } = router?.query || {};
   /*  const { coin_pairs = [] } = singleDexData || {};
    const router = useRouter();
    const { pairs = perPages[2], page = 1 } = router.query;

    const hardSorting = useState<{ key: string; sort: string }>({ key: "volume_24h", sort: "desc" });
    const [perPage, setPerPage] = useState(perPages.findIndex(x => x === Number(pairs)) !== -1 ? Number(pairs) : defaultPerPage);
    const [currentPage, setCurrentPage] = useState(Number(page) || 1); */

    const classes = classNames([
        styles["account-token-performance"],
        "list",
        className
    ]);

    if(accountsLoading) return <Skeleton style={{ height: 460 }} />;

    if(!accountProfitabilities || !profitability) return <></>;

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Tokens Trades PnL (Profit And Loss)</span>
            </strong>
            <Paginator 
                key={profitability?.length} 
                page={currentPage} 
                perPage={perPage} 
                total={perPage * total_pages} 
                onChangePage={(page) => {
                    setLoading(1);
                    accounts.getAccountProfitabilitiesData(id, page, undefined, undefined).then((e: unknown) => {
                        setCurrentPage(page);
                        const result = e as IApiAccountProfitabilities;
                        dispatch(setAccountProfitabilitiesData({
                            ...result,
                            currentPage: page
                        }));
                        setLoading(0);
                    });
                }}
            >
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                    data={profitability}
                    key={profitability?.length}
                    hardSorting={hardSorting}
                    onSortingChange={(sorting) => {
                        setLoading(1);
                        accounts.getAccountProfitabilitiesData(id, currentPage, sorting.key, sorting.sort).then((e: unknown) => {
                            const result = e as IApiAccountProfitabilities;
                            dispatch(setAccountProfitabilitiesData({
                                ...result,
                                currentPage
                            }));
                            
                            const [_, setHardSort] = hardSorting;
                            setHardSort(sorting);
                            setLoading(0);
                        });
                    }}
                >
                    <List adoptMobile hardPageId={currentPage - 1} hardPerPage={10} loadingCount={loading * 10} />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default AccountTokenPerformanceList;
