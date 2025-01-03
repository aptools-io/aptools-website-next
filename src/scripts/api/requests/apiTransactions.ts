import { Api } from "../api";

const getData = async (page: number = 0, limit: number = 10) => {
    const api = new Api(false);
    return api.post("/transactions", {}, {}, { page, limit });
};

const getUserTransactions = async (page: number = 0, limit: number = 10) => {
    const api = new Api(false);
    return api.post("/user_transactions", {}, {}, { page, limit });
};

const getSingleTransactionData = async (hash: string) => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get(`/transactions/by_hash/${hash}`, {}, {});
};
const getSingleTransactionDataByVersion = async (version: string) => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get(`/transactions/by_version/${version}`, {}, {});
};

const transactions = {
    getData,
    getUserTransactions,
    getSingleTransactionData,
    getSingleTransactionDataByVersion
};

export default transactions;
