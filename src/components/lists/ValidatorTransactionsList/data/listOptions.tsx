import { formatNumber, noExponents, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";
import { Tooltip } from "src/components/ui";
import styles from "../ValidatorTransactionsList.module.scss";

// Convert
const columnNames = (validatorIndex) => [
    {
        key: "version",
        value: "Version",
        headHideMobile: true,
        defaultSort: true,
        ownLink: "/transactions",
        underline: true,
        ownLinkValueFormatter: (v, row) => {
            return row?.version;
        }
    },
    {
        key: "changes",
        value: "Block",
        ownLink: "/blocks",
        underline: true,
        ownLinkValueFormatter: (v, row) => {
            const height = v?.[0]?.data?.data?.height;
            return height;
        },
        formatter: (changes) => {
            const height = changes?.[0]?.data?.data?.height;
            return `${height || "-"}`;
        },
        headHideMobile: true
    },
    {
        key: "timestamp",
        formatter: (v) => {
            return <Tooltip text={timeAgo(v / 1000 / 1000)}>{timeAgo(v / 1000 / 1000, true)}</Tooltip>;
        },
        value: "Age"
    },
    {
        key: "events",
        value: "Sequence number",
        formatter: (events) => {
            const index = Number(validatorIndex) + 1;
            return events?.[index]?.sequence_number || "-";
        }
    },
    {
        key: "events",
        value: "Pool address",
        formatter: (events) => {
            const index = Number(validatorIndex) + 1;
            const address = events?.[index]?.data?.pool_address;
            return address ? shortenHashString(address, [15, 15]) : "-";
        },
        underline: true
    },
    {
        key: "events",
        value: "Amount",
        formatter: (events) => {
            const index = Number(validatorIndex) + 1;
            const amount = events?.[index]?.data?.rewards_amount;
            return amount ? concatString(formatNumber(amount / 100000000, 2), "", " APT") : "-";
        }
    }
];

// Columns
const columns = ["10%", "10%", "10%", "15%", "40%", "15%"];

export { columnNames, columns };
