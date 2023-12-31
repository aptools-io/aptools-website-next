import { formatNumber, setSign } from "src/scripts/util/numbers";

// Convert
const columnNamesMobile = [
    {
        "key": "name",
        "value": "Token",
        "link": "/dex",
        "mainMobile": true,
        "underline": true
    },
    {
        "key": "liquidity",
        "value": "Liquidity",
        "right": true,
        "formatter": (v) => `$${formatNumber(v)}`
    },
    {
        "key": "volume_24h",
        "value": "Volume 24H/%",
        "defaultSort": true,
        "right": true,
        "formatter": (v) => `$${formatNumber(v)}`,
        "under": [
            {
                "key": "change",
                "value": "%",
                "right": true,
                "formatter": (v) => `${setSign(formatNumber(v))}%`,
                "colorize": true
            }
        ]
    }
];

// Columns
const columnsMobile = ["35%", "35%", "30%"];

export { columnNamesMobile, columnsMobile };