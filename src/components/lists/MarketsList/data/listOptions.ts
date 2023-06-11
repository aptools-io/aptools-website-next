import { formatNumber, setSign } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";

// Convert
const columnNames = [
    {
        "key": "_id",
        "value": "##"
    },
    {
        "key": "pair",
        "value": "Pair",
    },
    {
        "key": "price",
        "value": "Price USD",
        "right": true,
        "formatter": (v) => `$${formatNumber(v)}`
    },
    {
        "key": "1hour_change",
        "value": "1h Change",
        "colorize": true,
        "formatter": (v) => `${setSign(formatNumber(v))}%`
    },
    {  
        "key": "24hours_change",
        "value": "24h Change",
        "colorize": true,
        "formatter": (v) => `${setSign(formatNumber(v))}%`
    },
    {  
        "key": "24h_txns",
        "value": "24h Txns",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}`
    },
    {  
        "key": "24h_volume",
        "value": "24h Volume",
        "right": true,
        "formatter": (v) => `$${formatNumber(v)}`,
        "defaultSort": true
    },
    {  
        "key": "liquidity",
        "value": "Liquidity",
        "right": true,
        "formatter": (v) => `${concatString(formatNumber(v), "$")}`
    }
]
// Columns
const columns = ['1fr', '20%', '10%', '10%', '10%', '16%', '16%', '16%'];

export { columnNames, columns };