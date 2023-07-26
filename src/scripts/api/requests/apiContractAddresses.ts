import { Api } from "../api";

const getData = async () => {
    const api = new Api();
    return api.get("/contract_address");
};

const contractAddresses = {
    getData
};

export default contractAddresses;