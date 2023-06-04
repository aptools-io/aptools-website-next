import { Api } from "../api";

const getData = async () => {
    const api = new Api(false);
    return api.get("/transactions");
};

const transactions = {
    getData
};

export default transactions;