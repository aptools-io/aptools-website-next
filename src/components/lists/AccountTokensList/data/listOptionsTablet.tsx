import { formatNumber, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { Tooltip } from "src/components/ui";
import styles from "../AccountTokenPerformance.module.scss";

// Convert
const columnNamesTablet = [
    {
        value: "Token",
        key: "coin",
        symbol: "coin",
        headHideMobile: true
    },
    {
        key: "balance",
        value: "Balance",
        description: "balanceUSD",
        formatter: (v, row) =>
            `${concatString(formatNumber(v, 4), "", ` ${row.coin}`)}`,
        descriptionFormatter: (v) =>
            `${concatString(formatNumber(v), "$", "")}`,
        headHideMobile: true
    },
    {
        key: "wallet_percentage",
        value: "Wallet Percentage",
        formatter: (v) => `${concatString(formatNumber(v), "", "%")}`,
        headHideMobile: true
    },
    {
        key: "profitUSD",
        value: "Profit",
        description: "profit_percentage",
        formatter: (v) => `${concatString(formatNumber(v), "", "$")}`,
        descriptionFormatter: (v) =>
            `${concatString(setSign(formatNumber(v)), "", "%")}`,
        headHideMobile: true
    },
    {
        key: "timestamp",
        value: "Last transaction",
        formatter: (v) => (
            <Tooltip text={timeAgo(v * 1000)}>
                {timeAgo(v * 1000, true)}
            </Tooltip>
        ),
        headHideMobile: true
    }
];

// Columns
const columnsTablet = ["10%", "22.5%", "22.5%", "22.5%", "22.5%"];

export { columnNamesTablet, columnsTablet };
