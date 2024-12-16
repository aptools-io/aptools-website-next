import { Api } from "../api";

const getBlockByVersionData = async (version: number, withTransactions: boolean = false) => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get(`/blocks/by_version/${version}`, {}, { with_transactions: withTransactions });
};

const getBlockByHeightData = async (height: number, withTransactions: boolean = false) => {
    const api = new Api(false, process.env.OUTSIDE_URL);
    return api.get(`/blocks/by_height/${height}`, {}, { with_transactions: withTransactions });
};

const getBlocks = async (page: number = 0, limit: number = 20) => {
    const api = new Api(false);
    return api.post("/blocks", {}, {}, { page, limit }).then((response: any) => response.blocks);
};

const blocks = {
    getBlockByVersionData,
    getBlockByHeightData,
    getBlocks
};

export default blocks;
