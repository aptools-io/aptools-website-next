// Slices
import { setAccountInfoData, setAccountNftsCollectionsData, setAccountProfitabilitiesData, setAccountResourcesData, setAccountsLoading, setAccountTokensData, setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";

// Components
import { AccountTransactionsList, AccountTokensList } from "src/components/lists";
import { Plug } from "src/components/ui";
import { accounts, nfts } from "src/scripts/api/requests";

import AccountOverview from "../../AccountOverview/AccountOverview";
import AccountNtfList from "../../AccountNtfList/AccountNtfList";

// Styles
import styles from "../Account.module.scss";
import AccountResourcesList from "../../AccountResourcesList/AccountResourcesList";
import AccountInfo from "../../AccountInfo/AccountInfo";
import NftTransfers from "../../../lists/NftTransfersList/NftTransfersList";
import NftHolders from "../../../lists/NftHoldersList/NftHoldersList";
import NftInventory from "../../NftInventory/NftInventory";
import NftPending from "../../../lists/NftPendingList/NftPendingList";
import { setNftsCollectionHolders, setNftsCollectionInventory, setNftsCollectionPendingClaims, setNftsCollectionTransfers, setNftsLoading } from "src/scripts/redux/slices/nftsSlice";

const categories = (dispatch) => {
    return [
        {
            id: 1,
            title: "Transfers",
            component: () => <NftTransfers />,
            action: async (setCustomEntry, setLoading, id, queryId, query) => {
                setLoading(false);
                dispatch(setNftsLoading(true));
                await nfts.getNftsCollectionTransfersData(1, 10, queryId, query?.name).then((e: unknown) => {
                    const result = e as IApiNftCollectionTransfer[];
                    dispatch(setNftsCollectionTransfers(result));
                    dispatch(setNftsLoading(false));
                });
            }
        },
        {
            id: 2,
            title: "Holders",
            component: () => <NftHolders />,
            action: async (setCustomEntry, setLoading, id, queryId, query) => {
                setLoading(false);
                dispatch(setNftsLoading(true));
                await nfts.getNftsCollectionHoldersData(1, 10, queryId, query?.name).then((e: unknown) => {
                    const result = e as IApiNftCollectionHolder[];
                    dispatch(setNftsCollectionHolders(result));
                    dispatch(setNftsLoading(false));
                });
            }
        },
        {
            id: 3,
            title: "Pending Claims",
            component: () => <NftPending />,
            action: async (setCustomEntry, setLoading, id, queryId, query) => {
                setLoading(false);
                dispatch(setNftsLoading(true));
                await nfts.getNftsCollectionPendingClaimsData(1, 10, queryId, query?.name).then((e: unknown) => {
                    const result = e as IApiNftCollectionPendingClaims;
                    dispatch(setNftsCollectionPendingClaims(result));
                    dispatch(setNftsLoading(false));
                });
            }
        },
        {
            id: 4,
            title: "Inventory",
            component: () => <NftInventory />,
            action: async (setCustomEntry, setLoading, id, queryId, query) => {
                setLoading(false);
                dispatch(setNftsLoading(true));
                await nfts.getNftsCollectionInventoryData(0, 10, queryId, query?.name).then((e: unknown) => {
                    const result = e as IApiNftCollectionInventories;
                    dispatch(setNftsCollectionInventory(result));
                    dispatch(setNftsLoading(false));
                });
            }
        },
    ];
};

export default categories;