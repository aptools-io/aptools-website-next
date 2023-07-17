import { Api } from "../api";

const getAccountsData = async (limit = 10, offset = 0) => {
    const api = new Api(true);
    return api.get("/richlist", {}, { limit, offset });
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

const accounts = {
    getAccountsData,
    getAccountsStatsData,
    getAccountStatsData,
    getAccountProfitabilitiesData
};

export default accounts;