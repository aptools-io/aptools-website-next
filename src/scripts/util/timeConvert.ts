import moment from "moment";
import { formatNumber } from "./numbers";

const ensureMillisecondTimestamp = (timestamp: string) => {
    if (timestamp.length > 13) {
        timestamp = timestamp.slice(0, 13);
    }
    if (timestamp.length === 10) {
        timestamp += "000";
    }
    return parseInt(timestamp, 10);
};

const parseTimestamp = (timestamp: string) => {
    return moment(ensureMillisecondTimestamp(timestamp));
};

const timeAgo = (time) => {
    const timestamp = time;
    const currentTime = moment();
    const pastTime = moment(timestamp);
    const duration = moment.duration(currentTime.diff(pastTime));

    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    const formattedDuration = `${hours}h ${minutes}m ${seconds}sec ago`;
    return formattedDuration;
};

const transactionDate = (timestamp, secs = false) => moment(!secs ? timestamp / 1000 : timestamp * 1000).format("DD MMM YYYY HH:mm:ss");

const timerFrom = (timestamp: number, currentTimestamp: number) => {
    let difference = currentTimestamp - (timestamp * 1000);

    const daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24;

    const hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60;

    const minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60;

    const secondsDifference = Math.floor(difference/1000);
    
    return `${formatNumber(daysDifference)}d ${hoursDifference}h ${minutesDifference}m ${secondsDifference}s`;
};

const addZero = (number: number) => {
    if(number < 10 && number > -1) return `0${number}`;
    return number;
};

const time = (timestamp: string) => {
    const time = new Date(timestamp);
    return `${addZero(time.getHours())}:${addZero(time.getMinutes())}:${addZero(time.getSeconds())}`;
};

const timeFull = (timestamp: string) => {
    const time = new Date(timestamp);
    return `${addZero(time.getUTCDate() + 1)}.${addZero(time.getMonth() + 1)}.${time.getFullYear()}, ${addZero(time.getHours())}:${addZero(time.getMinutes())}:${addZero(time.getSeconds())}`;
};

const dateDiffInDays = (date1: Date, date2: Date) => {
    const diffInMs = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
};

const chartDate = (v: string) => {
    const formatter = new Intl.DateTimeFormat("en", { month: "short" });
    return `${new Date(v).getDate()} ${formatter.format(new Date(v))}'${new Date(v).getFullYear() % 100}`;
};
export { ensureMillisecondTimestamp, parseTimestamp, timerFrom, dateDiffInDays, timeFull, time, addZero, timeAgo, chartDate, transactionDate };