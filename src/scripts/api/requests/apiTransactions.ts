import { Api } from "../api";

const getData = async (start: number = 0, limit: number = 10) => {
    const api = new Api(false);
    return api.get("/transactions", {}, { start, limit });
};

const getSingleTransactionData = async (hash: string) => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get(`/transactions/by_hash/${hash}`, { }, {});
};

const transactions = {
    getData,
    getSingleTransactionData
};

export default transactions;