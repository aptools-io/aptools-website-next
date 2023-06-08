
const formatDecimal = (decimal: string) => { 
    if(decimal.length > 2) return decimal.slice(0, 2);
    if(decimal.length == 2) return `${decimal}`;
    if(decimal.length == 1) return `${decimal.slice(0, 1)}`;
    return '00';
}

const formatNumber = (number: string | number) => {
    if(Number.isNaN(Number(number))) return null;

    let num = number;
    if(typeof num === "string" && !Number.isNaN(Number(num))) num = Number(num);
    else num = Number(num);

    if(num === 0) return `${num}.00`;
    if(num < 1 && num > -1) return num;

  

    const numberString = num.toString();
    const pointIndex = numberString.indexOf(".");
    const integer = pointIndex === -1 ? numberString : numberString.substring(0, pointIndex);
    const decimal = numberString.substring(pointIndex + 1);

    const formattedInteger = new Intl.NumberFormat("en").format(Number(integer)).replaceAll(".", ",");
    if(pointIndex !== -1) return `${formattedInteger}.${formatDecimal(decimal)}`;
 
    return formattedInteger;
};

const setSign = (number: string | number) => {
    const minus = `${number}`.indexOf("-");
    if(minus > -1) return number;
    if(Number(number) !== 0) return `+${number}`;
    return number;
}

export { formatNumber, formatDecimal, setSign };