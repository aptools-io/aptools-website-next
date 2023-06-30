import { Api } from "../api";

const getData = async (dexName: string) => {
    const api = new Api(false);
    return api.get(`/dex_info_stage?dex=${dexName}`);
};

const dexSingle = {
    getData
};

export default dexSingle;