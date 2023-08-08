// Slices
import { setAccountInfoData, setAccountNftsCollectionsData, setAccountProfitabilitiesData, setAccountResourcesData, setAccountsLoading, setAccountTokensData, setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";

// Components
import { Plug } from "src/components/ui";

// Styles
import ValidatorOverview from "../../ValidatorOverview/ValidatorOverview";
import TransactionCodeList from "../../TransactionCodeList/TransactionCodeList";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { transactions, validators } from "src/scripts/api/requests";
import { setValidatorTransactions, setValidatorTransactionsLoading } from "src/scripts/redux/slices/validatorsSlice";
import { ValidatorTransactionsList } from "src/components/lists";

const categories = (dispatch: Dispatch<AnyAction>, validator: [IApiValidators, IApiValidators, IApiValidators]) => {
    return [
        {
            id: 1,
            title: "Overview",
            component: () => <ValidatorOverview />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                
            }
        },
        {
            id: 2,
            title: "Rewards",
            component: () => <ValidatorTransactionsList />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                dispatch(setValidatorTransactionsLoading(true));
                await validators.getValidatorsMoveResourcesData("0xee49776eff9fd395eb90d601449542080645e63704f518b31c6f72b6a95d7868", 0, 10)
                    .then((e: unknown) => {
                        const result = e as any;
                        const promises = result?.data?.move_resources
                            ?.map(element => transactions.getSingleTransactionDataByVersion(element.transaction_version)) || [];

                        Promise.all(promises).then((values: unknown) => {
                            const result = values as IApiTransactionInfo[];
                            dispatch(setValidatorTransactions(result));
                            dispatch(setValidatorTransactionsLoading(false));
                        });
                    });
               
            }
        },
        {
            id: 3,
            title: "Resources",
            component: () =>  <TransactionCodeList key={3} getElements={() => {
                if(!validator?.length) return [];
                return validator.map(item => {
                    return [{
                        title: "Type",
                        value: item.type
                    }, {
                        title: "Data",
                        code: item.data
                    }]
                });
            }} />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                
            }
        },
    ];
};

export default categories;