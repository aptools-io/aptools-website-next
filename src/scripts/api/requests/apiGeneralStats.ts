import { Api } from "../api"

const getData = async () => {
    const api = new Api();
    return await api.get("/general_stats");
}

const generalStats = {
    getData
}

export default generalStats;