import { formatNumber, setSign } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";

// Convert
const columnNamesMobile = [
    {
        "key": "_id",
        "value": "##",
        "hideMobile": true,
        "headRemove": true,
    },
    {
        "key": "pair",
        "value": "Pair",
        "valueGridReplace": [
            {
                "key": "pair",
            },
            {
                "key": "price",
                "right": true,
                "formatter": (v) => `$${formatNumber(v)}`,
            },
            {
                "key": "1hour_change",
                "colorize": true,
                "formatter": (v) => `${setSign(formatNumber(v))}%`
            },
            {
                "collapser": true
            },
        ],
        "mainMobile": true,
    },
    {
        "key": "price",
        "value": "Price USD",
        "right": true,
        "hideMobile": true,
    },
    {
        "key": "1hour_change",
        "value": "1h Change",
        "colorize": true,
        "formatter": (v) => `${setSign(formatNumber(v))}%`,
        "hideMobile": true,
    },
    {  
        "key": "24hours_change",
        "value": "24h Change",
        "colorize": true,
        "formatter": (v) => `${setSign(formatNumber(v))}%`,
        "headRemove": true,
    },
    {  
        "key": "24h_txns",
        "value": "24h Txns",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}`,
        "headRemove": true,
    },
    {  
        "key": "24h_volume",
        "value": "24h Volume",
        "right": true,
        "formatter": (v) => `$${formatNumber(v)}`,
        "defaultSort": true,
        "headRemove": true,
    },
    {  
        "key": "liquidity",
        "value": "Liquidity",
        "right": true,
        "formatter": (v) => `${concatString(formatNumber(v), "$")}`,
        "headRemove": true,
    }
];
// Columns
const columnsMobile = ["55%", "20%", "20%", "5%"];

export { columnNamesMobile, columnsMobile };