import { formatNumber, noExponents, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";
import { ActiveLink, CopyText } from "src/components/ui";
import { percentClass } from "src/scripts/util/classes";
import styles from "../AccountTokenPerformanceList.module.scss";

// Convert
const columnNamesTablet = [
    {
        key: "_id",
        value: "##",
        hideMobile: true
    },
    {
        key: "coin_name",
        value: "Coin",
        mainMobile: true,
        valueGridReplace: [
            {
                key: "_id",
                value: "##"
            },
            {
                key: "coin",
                symbol: "coin",
                value: ""
            },
            {
                key: "remainder",
                value: "Balance",
                description: "coin",
                formatter: (v) => `${formatNumber(v, 4)}`
            },
            {
                key: "remainder_usd",
                value: "Value, USD",
                formatter: (v) =>
                    `${concatString(formatNumber(v, 2), "", "$")}`,
                approxKey: "approximately"
            },
            {
                key: "profit_usd",
                value: "Profit (all time), USD",
                formatter: (v) => `${formatNumber(v)}`,
                descriptionFormatter: (v: any, row?: any) => {
                    return (
                        <div
                            className={percentClass(
                                row?.profit_percentage,
                                true,
                                true
                            )}>
                            {concatString(
                                setSign(formatNumber(row?.profit_percentage)),
                                "",
                                "%"
                            )}
                        </div>
                    );
                },
                headHideMobile: true,
                right: true,
                approxKey: "approximately"
            },
            {
                collapser: true,
                right: true
            }
        ]
    },
    {
        key: "remainder",
        value: "Balance",
        hideMobile: true
    },
    {
        key: "remainder_usd",
        value: "Value, USD",
        hideMobile: true
    },
    {
        key: "profit_usd",
        value: "Profit (all time), USD",
        hideMobile: true,
        right: true
    },
    {
        value: "",
        key: "profit_usd",
        headRemove: true,
        formatterComponent: (v, row) => {
            return (
                <span
                    className={
                        styles["account-token-performance__tablet-inner"]
                    }>
                    <span
                        className={
                            styles["account-token-performance__tablet-item"]
                        }>
                        <span className={styles["title"]}>Sold</span>
                        <span className={styles["info"]}>
                            <span className={styles["value big"]}>
                                {concatString(
                                    formatNumber(row?.all_time_sold, 4),
                                    "",
                                    ` ${row?.coin}`
                                )}
                            </span>
                            <span className={styles["description"]}>
                                {concatString(
                                    formatNumber(row?.all_time_sold_usd, 2),
                                    "",
                                    "$"
                                )}
                            </span>
                        </span>
                    </span>
                    <span
                        className={
                            styles["account-token-performance__tablet-item"]
                        }>
                        <span className={styles["title"]}>Bought</span>
                        <span className={styles["info"]}>
                            <span className={styles["value big"]}>
                                {concatString(
                                    formatNumber(row?.all_time_bought, 4),
                                    "",
                                    ` ${row?.coin}`
                                )}
                            </span>
                            <span className={styles["description"]}>
                                {concatString(
                                    formatNumber(row?.all_time_bought_usd, 2),
                                    "",
                                    "$"
                                )}
                            </span>
                        </span>
                    </span>
                </span>
            );
        },
        collapsed: true
    }
];

// Columns
const columnsTablet = ["5%", "17.5%", "17.5%", "25%", "25%", "5%"];

export { columnNamesTablet, columnsTablet };
