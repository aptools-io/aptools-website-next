import { formatNumber, setSign } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNamesDesktop = [
    {
        "key": "balance_rank",
        "value": "Rank",
        "defaultSort": true,
        "defaultSortType": "asc",
    },
    {
        "key": "address",
        "value": "Address",
        "formatter": (v) => `${v}`,
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
const columnsDesktop = ["5%", "65%", "15%", "15%"];

export { columnNamesDesktop, columnsDesktop };