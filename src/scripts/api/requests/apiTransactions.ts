import { Api } from "../api";

const getData = async (start: number = 0) => {
    const api = new Api(false);
    return api.get(`/transactions`, {}, { start: "0" });
};

const transactions = {
    getData
};

export default transactions;