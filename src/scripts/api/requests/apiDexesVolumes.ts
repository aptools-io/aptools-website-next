import { Api } from "../api";

const getData = async () => {
    const api = new Api(false);
    return api.get("/dexes_volumes");
};

const dexesVolumes = {
    getData
};

export default dexesVolumes;