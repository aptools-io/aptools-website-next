import { formatNumber, setSign } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

// Convert
const columnNamesMobile = [
    {
        key: "rank",
        value: "Rank",
        defaultSort: true,
        defaultSortType: "asc",
        hideMobile: true
    },
    {
        key: "address",
        value: "Address",
        formatter: (v) => `${shortenHashString(v)}`,
        valueGridReplace: [
            {
                key: "rank",
                value: "Rank"
            },
            {
                key: "address",
                formatter: (v) => `${shortenHashString(v)}`,
                ownLink: "/accounts",
                right: true,
                value: ""
            }
        ]
    },
    {
        key: "amount",
        value: "NFT amount",
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`,
        headRemove: true
    },
    {
        key: "balanceUSD",
        value: "Balance in USD",
        formatter: (v) => `${concatString(formatNumber(v), "", "$")}`,
        headRemove: true
    },
    {
        key: "maxPrice",
        value: "Max NFT price",
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`,
        headRemove: true
    },
    {
        key: "minPrice",
        value: "Min NFT price",
        formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`,
        headRemove: true
    }
];

// Columns
const columnsMobile = ["50%", "50%"];

export { columnNamesMobile, columnsMobile };
