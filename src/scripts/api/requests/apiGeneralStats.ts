import { Api } from "../api";

const getData = async () => {
    const api = new Api();
    return api.get("/general_stats");
};

const generalStats = {
    getData
};

export default generalStats;