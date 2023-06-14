import { formatNumber, setSign } from "src/scripts/util/numbers";

// Convert
const columnNames = [
    {
        "key": "category",
        "value": "Category",
        "mainMobile": true,
    },
    {
        "key": "percent",
        "value": "% of Initial Token Distribution",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}%`,
        
    },
    {  
        "key": "inital",
        "value": "Initial Tokens",
        "right": true,
        "formatter": (v) => `${formatNumber(v)}`,
        "defaultSort": true,
    }
];

// Columns
const columns = ["35%", "30%", "35%"];

export { columnNames, columns };