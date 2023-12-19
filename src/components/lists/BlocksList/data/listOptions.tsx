import { Tooltip } from "src/components/ui";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";

// Convert
const columnNames = [
    {
        key: "block_height",
        value: "Block",
        defaultSort: true,
        ownLink: "/blocks",
        underline: true,
        ownLinkValueFormatter: (v, row) => {
            return row?.block_height;
        }
    },
    {
        key: "block_timestamp",
        value: "Age",
        formatter: (v) => {
            return <Tooltip text={timeAgo(v)}>{timeAgo(v, true)}</Tooltip>;
        }
    },
    {
        key: "block_hash",
        value: "Hash",
        underline: true,
        ownLink: "/blocks",
        ownLinkValueFormatter: (v, row) => {
            return row?.block_height;
        },
        formatter: (v) => `${shortenHashString(v, [20, 20])}`
    },
    {
        key: "first_version",
        value: "First version",
        ownLink: "/transactions",
        underline: true,
        ownLinkValueFormatter: (v, row) => {
            return row?.first_version;
        }
    },
    {
        key: "last_version",
        value: "Last version",
        ownLink: "/transactions",
        underline: true,
        ownLinkValueFormatter: (v, row) => {
            return row?.last_version;
        }
    }
];

// Columns
const columns = ["10%", "10%", "60%", "10%", "10%"];

export { columnNames, columns };
