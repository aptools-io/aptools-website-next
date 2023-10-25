import { formatNumber } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNames = [
    {
        key: "min",
        value: "Balance, USD",
        defaultSort: true,
        defaultSortType: "asc",
        formatter: (v, row) => {
            const min = v < 0 ? "∞" : concatString(formatNumber(v), "", "$");
            const max = row?.max < 0 ? "∞" : concatString(formatNumber(row?.max), "", "$");
            return `${min} – ${max}`;
        },
        center: true
    },
    {
        key: "amount",
        value: "Wallets amount",
        right: true,
        formatter: (v) => `${formatNumber(v)}`
    }
];

// Columns
const columns = ["70%", "30%"];

export { columnNames, columns };
