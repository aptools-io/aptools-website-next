import { formatNumber } from "src/scripts/util/numbers";

// Convert
const columnNames = [
    {
        key: "rank",
        value: "Rank",
        defaultSort: true,
        defaultSortType: "asc"
    },
    {
        key: "token_name",
        value: "Token Name",
        symbol: "symbol",
        description: "symbol",
        ownLink: "/accounts",
        ownLinkValueFormatter: (v, row) => {
            return `coin/${row.blockchain_name}`;
        }
    },
    {
        key: "number",
        value: "Unique Senders",
        right: true,
        formatter: (v) => `${formatNumber(v)}`
    }
];

// Columns
const columns = ["10%", "70%", "20%"];

export { columnNames, columns };
