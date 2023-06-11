import { formatNumber } from "src/scripts/util/numbers";

// Convert
const columnNames = [
    {
        "key": "rank",
        "value": "##",
        "defaultSort": true,
        "defaultSortType": "asc"
    },
    {
        "key": "token_name",
        "value": "Token Name",
        "symbol": "symbol",
        "description": "symbol"
    },
    {
        "key": "number",
        "value": "Unique Senders",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}`
    },
]

// Columns
const columns = ['10%', '70%', '20%'];

export { columnNames, columns };