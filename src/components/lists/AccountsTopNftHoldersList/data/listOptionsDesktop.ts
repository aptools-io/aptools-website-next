import { formatNumber, setSign } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNamesDesktop = [
    {
        key: "rank",
        value: "Rank",
        defaultSort: true,
        defaultSortType: "asc"
    },
    {
        key: "address",
        value: "Address",
        formatter: (v) => `${shortenHashString(v, [25, 25])}`,
        ownLink: "/accounts"
    },
    {
        key: "balance",
        value: "NFT amount",
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`,
        right: true
    },
    {
        key: "balanceUSD",
        value: "Balance in USD",
        formatter: (v) => `${concatString(formatNumber(v), "", "$")}`,
        right: true
    },
    {
        key: "maxPrice",
        value: "Max NFT price",
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`,
        right: true
    },
    {
        key: "minPrice",
        value: "Min NFT price",
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`,
        right: true
    }
];

// Columns
const columnsDesktop = ["5%", "35%", "15%", "15%", "15%", "15%"];

export { columnNamesDesktop, columnsDesktop };
