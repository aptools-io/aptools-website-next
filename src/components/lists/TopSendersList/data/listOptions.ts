import { formatNumber } from "src/scripts/util/numbers";
import { shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNames = [
    {
        "key": "rank",
        "value": "##",
        "defaultSort": true,
        "defaultSortType": "asc",
        "hideMobile": true
    },
    {
        "key": "address",
        "value": "Address",
        "formatter": (v) => `${shortenHashString(v)}`,
        "link": "/accounts",
        "mainMobile": true,
        "underline": true
    },
    {
        "key": "total_txn",
        "value": "Total Txn",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "percentage",
        "value": "Percentage",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}%`
    },
];

// Columns
const columns = ["5%", "55%", "20%", "20%"];

export { columnNames, columns };