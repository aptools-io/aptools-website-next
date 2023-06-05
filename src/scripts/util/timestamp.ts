import moment from "moment";

const ensureMillisecondTimestamp = (timestamp: string) => {
    if (timestamp.length > 13) {
        timestamp = timestamp.slice(0, 13);
    }
    if (timestamp.length == 10) {
        timestamp = timestamp + "000";
    }
    return parseInt(timestamp);
}

const parseTimestamp = (timestamp: string) => {
    return moment(ensureMillisecondTimestamp(timestamp));
}

export { ensureMillisecondTimestamp, parseTimestamp };