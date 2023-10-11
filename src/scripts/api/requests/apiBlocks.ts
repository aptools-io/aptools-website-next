import { Api } from "../api";

const getBlockByVersionData = async (version: number, withTransactions: boolean = false) => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get(`/blocks/by_version/${version}`, {}, { with_transactions: withTransactions });
};

const getBlockByHeightData = async (height: number, withTransactions: boolean = false) => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get(`/blocks/by_height/${height}`, {}, { with_transactions: withTransactions });
};

const getBlocks = async (limit: number = 25, start: number = 0) => {
    const api = new Api(false);
    return api.get("/blocks", {}, { limit, start });
};

const blocks = {
    getBlockByVersionData,
    getBlockByHeightData,
    getBlocks
};

export default blocks;
