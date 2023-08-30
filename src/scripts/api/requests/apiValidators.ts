import { Api } from "../api";

const getValidatorsLocationsData = async (
    start: number = 0,
    limit: number = 10
) => {
    const api = new Api(false, process.env.OUTSIDE_MAP_URL, "");
    console.log(
        await api.get("/validator_location_stats.json", {}, { start, limit })
    );
    return api.get("/validator_location_stats.json", {}, { start, limit });
};

const getValidatorsMoveResourcesData = async (
    address: string = null,
    start: number = 0,
    limit: number = 10
) => {
    const api = new Api(false, process.env.OUTSIDE_URL_2);
    return api.post(
        "/graphql",
        {},
        {},
        {
            query: "query AccountTransactionsData($address: String, $limit: Int, $offset: Int) {\n    move_resources(\n      where: {address: {_eq: $address}}\n      order_by: {transaction_version: desc}\n      distinct_on: transaction_version\n      limit: $limit\n      offset: $offset\n    ) {\n      transaction_version\n    }\n  }",
            variables: {
                limit,
                address,
                offset: start
            }
        }
    );
};

const transactions = {
    getValidatorsLocationsData,
    getValidatorsMoveResourcesData
};

export default transactions;
