import { Api } from "../api"

const getData = async () => {
    const api = new Api();
    return await api.get("/contract_addresses");
}

const contractAddresses = {
    getData
}

export default contractAddresses;