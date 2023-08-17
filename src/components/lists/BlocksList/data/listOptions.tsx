import { Tooltip } from "src/components/ui";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";

// Convert
const columnNames = [
    {
        key: "block_height",
        value: "Block",
        link: "/blocks",
        defaultSort: true
    },
    {
        key: "block_timestamp",
        value: "Age",
        formatter: (v) => (
            <Tooltip text={timeAgo(v / 1000)}>
                {timeAgo(v / 1000, true)}
            </Tooltip>
        )
    },
    {
        key: "block_hash",
        value: "Hash",
        underline: true,
        formatter: (v) => `${shortenHashString(v, [20, 20])}`
    },
    {
        key: "first_version",
        value: "First version"
    },
    {
        key: "last_version",
        value: "Last version"
    }
];

// Columns
const columns = ["10%", "10%", "60%", "10%", "10%"];

export { columnNames, columns };
