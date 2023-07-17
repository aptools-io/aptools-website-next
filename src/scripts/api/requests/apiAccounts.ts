import { Api } from "../api";

const getAccountsData = async (limit = 10, offset = 0) => {
    const api = new Api(true);
    return api.get(`/richlist`, {}, { limit, offset });
};
const getAccountsStatsData = async () => {
    const api = new Api(true);
    return api.get(`/account_stats`, {});
};

const accounts = {
    getAccountsData,
    getAccountsStatsData
};

export default accounts;