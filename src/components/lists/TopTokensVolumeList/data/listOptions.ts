import { formatNumber, setSign } from "src/scripts/util/numbers";

// Convert
const columnNames = [
    {
        "key": "token",
        "value": "AMM"
    },
    {
        "key": "volume_24h",
        "value": "Volume 24h",
        "right": true,
        "formatter": (v) => `$${formatNumber(v)}`,
        "defaultSort": true,
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
const columns = ['50%', '25%', '25%'];

export { columnNames, columns };