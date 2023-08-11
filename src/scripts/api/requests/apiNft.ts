import { Api } from "../api";

const getNftsCollectionListData = async (page: number = 0, pageSize: number = 10) => {
    const api = new Api(true, process.env.OUTSIDE_URL_3, "");
    return api.get("/collection_list", {}, { page, pageSize });
};

const getNftsCollectionInventoryData = async (offset: number = 0, limit: number = 1, creator: string = "", collection: string = "") => {
    const api = new Api(true, process.env.OUTSIDE_URL_3, "");
    return api.get("/collection_inventory", {}, { offset, limit, creator, collection });
};


const nft = {
    getNftsCollectionListData,
    getNftsCollectionInventoryData
};

export default nft;