import { formatNumber } from "src/scripts/util/numbers";

// Convert
const columnNames = [
    {
        "key": "contract",
        "value": "Contract",
        "ignoreCombined": true,
        "link": "/projects",
        "mainMobile": true
    },
    {
        "key": "24h",
        "value": "1 day",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "week",
        "value": "7 days",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}`
    },
    {  
        "key": "all_time",
        "value": "All time",
        "right": true,
        "defaultSort": true,
        "formatter": (v) => `${formatNumber(v)}`
    }
]

// Columns
const columns = ['25%', '25%', '25%', '25%'];

export { columnNames, columns };