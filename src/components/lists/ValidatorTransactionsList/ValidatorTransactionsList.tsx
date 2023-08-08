// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { Button, List, ListHeader, Paginator, Plug, Skeleton } from "src/components/ui";
import { perPages, defaultPerPage } from "src/scripts/consts/perPages";
import { accounts, transactions, validators } from "src/scripts/api/requests";
import { setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";
import styles from "./ValidatorTransactionsList.module.scss";


// Options
import { columnNames, columns } from "./data/listOptions";
import { setValidatorTransactions } from "src/scripts/redux/slices/validatorsSlice";

// Consts


const ValidatorTransactionsList: React.FC<IComponent> = ({
    className 
}) => {
    const { validatorTransactions, validatorTransactionsLoading = false, validator } = useSelector((state: IRootState) => state.validators);
    const [loading, setLoading] = useState(0);
    
    const [start, setStart] = useState(10);
    const [limit] = useState(10);

    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query || {};



    const classes = classNames([
        styles["validators-transactions-list"],
        "list",
        className
    ]);

    const handleLoadMore = async () => {
        await validators.getValidatorsMoveResourcesData(id as string, start, limit)
            .then((e: unknown) => {
                setLoading(1);
                const result = e as any;
                const promises = result?.data?.move_resources
                    ?.map(element => transactions.getSingleTransactionDataByVersion(element.transaction_version)) || [];

                Promise.all(promises).then((values: unknown) => {
                    const result = values as IApiTransactionInfo[];
                    dispatch(setValidatorTransactions([...validatorTransactions, ...result]));
                    setStart(e => e + limit);
                    setLoading(0);
                });
            });
    }

    if(validatorTransactionsLoading) return <Skeleton style={{ height: 460 }} />;

    if(!validatorTransactions?.length) return <Plug noData />;

    return (
        <div className={classes}>
            <ListHeader 
                columnNames={columnNames(validator[2].data.validator_index)} 
                columns={columns} 
                data={validatorTransactions}
                key={validatorTransactions?.[validatorTransactions.length - 1]?.version}
            >
                <List adoptMobile />
            </ListHeader>
            {loading === 1 ? 
                <List adoptMobile loadingCount={loading * 10} /> :
                <div className={styles["validators-transactions-list__button"]}><Button onClick={handleLoadMore}>Add 10 Rewards</Button></div>
            }
        </div>
    );
};

export default ValidatorTransactionsList;
