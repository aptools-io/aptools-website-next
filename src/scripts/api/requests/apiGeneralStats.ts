import { Api } from "../api";

const getData = async () => {
    const api = new Api();
    return api.get("/general_stats");
};

const getTokenStatisticsData = async () => {
    const api = new Api();
    return api.get("/tokens_statistics");
};

const getBlockchainInfoData = async () => {
    const api = new Api();
    return api.get("/blockchain_statistics");
};

const getDexesStatisticsData = async () => {
    const api = new Api();
    return api.get("/dexes_statistics");
};

const generalStats = {
    getData,
    getTokenStatisticsData,
    getBlockchainInfoData,
    getDexesStatisticsData
};

export default generalStats;
