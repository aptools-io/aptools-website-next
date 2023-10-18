import { formatNumber } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNames = [
    {
        key: "min",
        value: "Balance, USD",
        defaultSort: true,
        defaultSortType: "asc",
        formatter: (v, row) => `${concatString(formatNumber(v), "", "$")} – ${concatString(formatNumber(row?.max), "", "$")}`,
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
