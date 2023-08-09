import { Api } from "../api";

const getMainData = async () => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get("", {}, { });
};

const blockchain = {
    getMainData
};

export default blockchain;