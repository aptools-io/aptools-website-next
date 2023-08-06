import { formatNumber } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNames = [
    {
        "key": "id",
        "value": "Index",
        "formatter": (v) => `#${formatNumber(v)}`,
        "headHideMobile": true
    },
    {
        "key": "",
        "copy": "addr",
        "value": ""
    },
    {
        "key": "addr",
        "value": "Validator",
        "formatter": (v) => `${shortenHashString(v, [15, 15])}`,
        "headHideMobile": true,
        "underline": true,
        "link": "/validators"
    },
    {  
        "key": "location",
        "value": "Location",
        "headHideMobile": true
    },
    {
        "key": "votingPower",
        "value": "Voting Power",
        "right": true,
        "defaultSort": true,
        "formatter": (v) => `${concatString(formatNumber(v.slice(0, 9)), "", " APT")}`,
        "headHideMobile": true
    },
    {
        "key": "blocks",
        "value": "Blocks",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}`,
        "headHideMobile": true
    },
];

// Columns
const columns = ["10%", "23px", "calc(40% - 23px)", "20%", "15%", "15%"];

export { columnNames, columns };