import { formatNumber, setSign } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNamesLarge = [
    {
        "key": "balance_rank",
        "value": "Rank",
        "defaultSort": true,
        "defaultSortType": "asc",
    },
    {
        "key": "address",
        "value": "Address",
        "formatter": (v) => `${shortenHashString(v)}`,
        "link": "/accounts"
    },
    {
        "key": "total_balance",
        "value": "Balance",
        "right": true,
        "formatter": (v) => `${concatString(formatNumber(v), "", " APT")}`
    },
    {  
        "key": "percentage",
        "value": "Percentage",
        "right": true,
        "formatter": (v) => `${concatString(formatNumber(v), "", "%")}`,
    }
];

// Columns
const columnsLarge = ["5%", "45%", "25%", "25%"];

export { columnNamesLarge, columnsLarge };