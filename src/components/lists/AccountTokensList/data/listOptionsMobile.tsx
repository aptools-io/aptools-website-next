import { formatNumber, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { percentClass } from "src/scripts/util/classes";
import { Tooltip } from "src/components/ui";
import styles from "../AccountTokensList.module.scss";

// Convert
const columnNamesMobile = [
    {
        key: "_id",
        value: "##",
        hideMobile: true,
        headRemove: true
    },
    {
        key: "coin_name",
        value: "Token",
        valueGridReplace: [
            {
                key: "coin_name",
                symbol: "coin",
                description: "coin"
            },
            {
                key: "balance",
                value: "Balance",
                description: "balanceUSD",
                formatter: (v, row) => `${concatString(formatNumber(v, 4), "", ` ${row.coin}`)}`,
                descriptionFormatter: (v) => `${concatString(formatNumber(v), "", "$")}`,
                right: true
            }
        ]
    },
    {
        key: "balance",
        value: "Balance",
        right: true,
        defaultSort: true,
        hideMobile: true
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
        formatter: (v, row) => {
            return (
                <div className={styles["account-tokens-list__percent"]}>
                    {concatString(formatNumber(v), "", "$")}
                    <div className={percentClass(row?.profit_percentage, true, true)}>{concatString(setSign(formatNumber(row?.profit_percentage)), "", "%")}</div>
                </div>
            );
        },
        headHideMobile: true
    },
    {
        key: "timestamp",
        value: "Last transaction",
        formatter: (v) => <Tooltip text={timeAgo(v)}>{timeAgo(v, true)}</Tooltip>,
        headHideMobile: true
    }
];

// Columns
const columnsMobile = ["50%", "50%"];

export { columnNamesMobile, columnsMobile };
