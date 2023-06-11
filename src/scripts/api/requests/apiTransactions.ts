import { Api } from "../api";

const getData = async (start: number) => {
    const api = new Api(false);
    return api.get(`/transactions?start=${start}`);
};

const transactions = {
    getData
};

export default transactions;