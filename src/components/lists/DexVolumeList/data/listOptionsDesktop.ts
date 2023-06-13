import { formatNumber, setSign } from "src/scripts/util/numbers";

// Convert
const columnNamesDesktop = [
    {
        "key": "name",
        "value": "Token",
        "link": "/projects",
        "mainMobile": true,
        "underline": true
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
];

// Columns
const columnsDesktop = ["25%", "25%", "25%", "25%"];

export { columnNamesDesktop, columnsDesktop };