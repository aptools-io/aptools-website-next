import { Api } from "../api";

const getNftsCollectionListData = async (page: number = 0, pageSize: number = 10) => {
    const api = new Api(true, process.env.OUTSIDE_URL_3, "");
    return api.get("/collection_list", {}, { page, pageSize });
};

const getNftsCollectionGeneralInfoData = async ( creator: string = "", collection: string = "") => {
    const api = new Api(true, process.env.OUTSIDE_URL_3, "");
    return api.get("/collection_general_info", {}, {creator, collection });
};

const getNftsCollectionTransfersData = async (page: number = 1, pageSize: number = 10, creator: string = "", collection: string = "") => {
    const api = new Api(true, process.env.OUTSIDE_URL_3, "");
    return api.get("/collection_transfers", {}, { page, pageSize, creator, collection });
};

const getNftsCollectionHoldersData = async (page: number = 1, pageSize: number = 10, creator: string = "", collection: string = "") => {
    const api = new Api(true, process.env.OUTSIDE_URL_3, "");
    return api.get("/collection_holders", {}, { page, pageSize, creator, collection });
};

const getNftsCollectionPendingClaimsData = async (page: number = 1, pageSize: number = 10, creator: string = "", collection: string = "") => {
    const api = new Api(true, process.env.OUTSIDE_URL_3, "");
    return api.get("/collection_pending_claims", {}, { page, pageSize, creator, collection });
};

const getNftsCollectionInventoryData = async (offset: number = 0, limit: number = 1, creator: string = "", collection: string = "") => {
    const api = new Api(true, process.env.OUTSIDE_URL_3, "");
    return api.get("/collection_inventory", {}, { offset, limit, creator, collection });
};




const nft = {
    getNftsCollectionListData,
    getNftsCollectionGeneralInfoData,
    getNftsCollectionTransfersData,
    getNftsCollectionHoldersData,
    getNftsCollectionPendingClaimsData,
    getNftsCollectionInventoryData
};

export default nft;