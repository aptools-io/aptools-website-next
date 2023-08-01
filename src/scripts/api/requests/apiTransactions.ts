import { Api } from "../api";

const getData = async (start: number = 0, limit: number = 10) => {
    const api = new Api(false);
    return api.get("/transactions", {}, { start, limit });
};

const transactions = {
    getData
};

export default transactions;