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

const getAccountTokensData = async (address = null, limit = 10, page = 1, key = null, sort = null) => {
    const api = new Api(false);
    return api.post("/account_coins", {}, {}, { account: address, pageSize: limit, currentPage: page, order: sort, orderBy: key });
};

const getAccountNftCollectionsData = async (address = null, pageSize = 5, currentPage = 1) => {
    const api = new Api(true);
    return api.post("/account_nft_collections", {}, { }, { account: address, pageSize, currentPage });
};

const getAccountNftData = async (address = null, collectionID = null, pageSize = 10, currentPage = 1) => {
    const api = new Api(true);
    return api.post("/account_nfts", {}, { }, { account: address, collectionID, pageSize, currentPage });
};

const getAccountResourcesData = async (address = null) => {
    const api = new Api(true);
    return api.get("/account_resources", {}, { address });
};

const getAccountModulesData = async (address = null) => {
    const api = new Api(true);
    return api.get("/account_modules", {}, { address });
};

const getAccountInfoData = async (address = null) => {
    const api = new Api(true);
    return api.get("/account_info", {}, { address });
};

const getAccountResourceData = async (address = null, resource = null) => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get(`/accounts/${address}/resource/${resource}`, { }, { });
};

const getAccountConfigPoolData = async (address = null) => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get(`/accounts/${address}/resources`, { }, { });
};

const accounts = {
    getAccountsData,
    getAccountsStatsData,
    getAccountStatsData,
    getAccountProfitabilitiesData,
    getAccountTransactionsData,
    getAccountTokensData,
    getAccountNftCollectionsData,
    getAccountNftData,
    getAccountResourcesData,
    getAccountModulesData,
    getAccountInfoData,
    getAccountResourceData,
    getAccountConfigPoolData
};

export default accounts;