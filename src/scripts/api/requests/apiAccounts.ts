import { Api } from "../api";

const getAccountsData = async (limit = 10, offset = 0) => {
    const api = new Api(true);
    return api.get("/rich_list", {}, { limit, offset });
};
const getAccountsStatsData = async () => {
    const api = new Api(true);
    return api.get("/account_stats", {});
};

const getAccountStatsData = async (address = null) => {
    const api = new Api(true);
    return api.get("/account", {}, { address });
};

const getAccountProfitabilitiesData = async (address = null, page = 1, order_by = "profit_percentage", order = "desc") => {
    const api = new Api(true);
    return api.get("/account_profitability", {}, { address, page, order_by, order });
};

const getAccountTransactionsData = async (address = null, limit = 25, offset = 0) => {
    const api = new Api(true);
    return api.get("/account_transactions", {}, { address, limit, offset });
};

const getAccountTokensData = async (address = null) => {
    const api = new Api(false);
    return api.post("/account_coins", {}, {}, { account: address, pageSize: 10, currentPage: 1, order: null, orderBy: null });
};

const getAccountNftData = async (address = null) => {
    const api = new Api(true);
    return api.get("/account_nfts", {}, { address });
};

const getAccountResourcesData = async (address = null) => {
    const api = new Api(true);
    return api.get("/account_resources", {}, { address });
};

const getAccountInfoData = async (address = null) => {
    const api = new Api(true);
    return api.get("/account_info", {}, { address });
};

const accounts = {
    getAccountsData,
    getAccountsStatsData,
    getAccountStatsData,
    getAccountProfitabilitiesData,
    getAccountTransactionsData,
    getAccountTokensData,
    getAccountNftData,
    getAccountResourcesData,
    getAccountInfoData
};

export default accounts;