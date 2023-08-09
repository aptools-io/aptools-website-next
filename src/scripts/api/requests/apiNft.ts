import { Api } from "../api";

const getNftsData = async (page: number = 0, pageSize: number = 10) => {
    const api = new Api(true);
    return api.get("/collection_list", {}, { page, pageSize });
};


const nft = {
    getNftsData,
};

export default nft;