import { formatNumber, setSign } from "src/scripts/util/numbers";

// Convert
const columnNames = [
    {
        "key": "name",
        "value": "AMM",
        "link": "/projects",
        "mainMobile": true
    },
    {
        "key": "liquidity",
        "value": "Liquidity",
        "defaultSort": true,
        "right": true,
        "formatter": (v) => `$${formatNumber(v)}`
    },
    {
        "key": "volume_24h",
        "value": "Volume 24h",
        "right": true,
        "formatter": (v) => `$${formatNumber(v)}`
    },
    {  
        "key": "change",
        "value": "%",
        "right": true,
        "formatter": (v) => `${setSign(formatNumber(v))}%`,
        "colorize": true
    }
]

// Columns
const columns = ['25%', '25%', '25%', '25%'];

export { columnNames, columns };