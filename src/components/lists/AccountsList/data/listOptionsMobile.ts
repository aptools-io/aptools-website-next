import { formatNumber, setSign } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNamesMobile = [
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
        "value": "Balance/Percentage",
        "defaultSort": true,
        "right": true,
        "formatter": (v) => `${concatString(formatNumber(v), "", " APT")}`,
        "under": [
            {
                "key": "percentage",
                "value": "Percentage",
                "right": true,
                "formatter": (v) => `${concatString(formatNumber(v), "", "%")}`,
            }
        ]
    }
];

// Columns
const columnsMobile = ["10%", "50%", "40%"];

export { columnNamesMobile, columnsMobile };