import { Api } from "../api";

const getData = async () => {
    const api = new Api();
    return api.get("/contract_transactions");
};

const contactTransactions = {
    getData
};

export default contactTransactions;