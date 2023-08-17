import { formatNumber, noExponents, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";
import { ActiveLink, CopyText, Tooltip } from "src/components/ui";
import styles from "../AccountTransactionsList.module.scss";

// Convert
const columnNamesMobile = [
    {
        key: "_id",
        value: "##",
        hideMobile: true,
        headRemove: true
    },
    {
        key: "block",
        value: "Type",
        valueGridReplace: [
            {
                key: "type",
                formatterComponent: (v) => {
                    return (
                        <span
                            className={classNames([
                                styles["account-transactions-list__type"],
                                { [styles.success]: v === "Deposit" },
                                { [styles.error]: v === "Withdraw" }
                            ])}>
                            {v}
                        </span>
                    );
                }
            },
            {
                key: "coin_symbol",
                value: "Coin",
                symbol: "coin_symbol",
                description: "coin_symbol"
            },
            {
                key: "value",
                description: "value_usd",
                formatter: (v, row) =>
                    `${concatString(
                        formatNumber(v, 2),
                        "",
                        ` ${row?.coin_symbol}`
                    )}`,
                descriptionFormatter: (v) =>
                    `${concatString(formatNumber(v, 2), "", " $")}`,
                right: true
            }
        ],
        mainMobile: true
    },
    {
        key: "coin_name",
        value: "Coin",
        hideMobile: true
    },
    {
        key: "value",
        value: "Value",
        hideMobile: true,
        right: true
    },
    {
        value: "",
        key: "fee",
        headRemove: true,
        formatterComponent: (v, row) => {
            const feeFormatter = (v) => {
                if (v.toString().indexOf("e") !== -1)
                    return `${concatString(
                        formatNumber(0.00001, 4, true),
                        "",
                        " APT"
                    )}`;
                return `${concatString(formatNumber(v, 4), "", " APT")}`;
            };
            return (
                <span
                    className={
                        styles["account-transactions-list__mobile-inner"]
                    }>
                    <div className={styles["time"]}>
                        <Tooltip text={timeAgo(row?.timestamp)}>
                            {timeAgo(row?.timestamp, true)}
                        </Tooltip>
                    </div>
                    <div className={styles["wrapper"]}>
                        <div>Txn fee</div>
                        <div>{feeFormatter(row?.fee)}</div>
                    </div>
                </span>
            );
        }
    },
    {
        value: "Version",
        key: "version",
        headRemove: true
    },
    {
        value: "Hash",
        key: "hash",
        formatter: (v) => `${shortenHashString(v)}`,
        ownLink: "/transactions",
        headRemove: true
    },
    {
        value: "Account",
        key: "account",
        ownLink: "/accounts",
        formatter: (v) => `${shortenHashString(v)}`,
        headRemove: true
    }
];

// Columns
const columnsMobile = ["30%", "25%", "45%"];

export { columnNamesMobile, columnsMobile };
