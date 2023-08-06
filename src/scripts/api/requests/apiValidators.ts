import { Api } from "../api";

const getValidatorsLocationsData = async (start: number = 0, limit: number = 10) => {
    const api = new Api(false, process.env.OUTSIDE_MAP_URL, "");
    return api.get("/validator_location_stats.json", {}, { start, limit });
};

const transactions = {
    getValidatorsLocationsData,
};

export default transactions;