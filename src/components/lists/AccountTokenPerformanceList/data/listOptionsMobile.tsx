import { formatNumber, noExponents, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";
import { ActiveLink, CopyText } from "src/components/ui";
import styles from "../AccountTokenPerformanceList.module.scss";

// Convert
const columnNamesMobile = [
    {
        key: "_id",
        value: "##",
        hideMobile: true
    },
    {
        key: "coin",
        symbol: "coin",
        value: "Coin",
        valueGridReplace: [
            {
                key: "_id",
                value: "##"
            },
            {
                key: "coin_name",
                symbol: "coin",
                description: "coin",
                value: ""
            },
            {
                key: "profit_percentage",
                value: "Profit (all time), %",
                formatter: (v) =>
                    `${concatString(formatNumber(v, 4), "", "%")}`,
                colorize: true,
                right: true
            }
        ]
    },
    {
        key: "profit_percentage",
        value: "Profit (all time), %",
        defaultSort: true,
        right: true,
        hideMobile: true
    },
    {
        key: "remainder",
        formatter: (v, row) =>
            `${concatString(formatNumber(v, 4), "", ` ${row?.coin}`)}`,
        descriptionFormatter: (v, row) =>
            `${concatString(formatNumber(row.remainder_usd, 4), "", "$")}`,
        value: "Balance",
        headRemove: true
    },
    {
        key: "",
        formatter: (v, row) =>
            `${concatString(
                formatNumber(row?.all_time_sold, 4),
                "",
                ` ${row?.coin}`
            )}`,
        descriptionFormatter: (v, row) =>
            `${concatString(formatNumber(row.all_time_sold_usd, 4), "", "$")}`,
        value: "Sold",
        headRemove: true
    },
    {
        key: "",
        formatter: (v, row) =>
            `${concatString(
                formatNumber(row?.all_time_bought, 4),
                "",
                ` ${row?.coin}`
            )}`,
        descriptionFormatter: (v, row) =>
            `${concatString(
                formatNumber(row.all_time_bought_usd, 4),
                "",
                "$"
            )}`,
        value: "Bought",
        headRemove: true
    }
];

// Columns
const columnsMobile = ["5%", "47.5%", "47.5%"];

export { columnNamesMobile, columnsMobile };
