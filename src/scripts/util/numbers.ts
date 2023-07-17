const numberShorter = (
    value, 
    fixed, 
    symbols = ["", " thousands", " millions", " billions", " trillions", " quadrillions", " quintillions"]
) => {
    if(value === 0) return value;
    if(value <= 999) return value.toFixed(fixed || 2);
    let schema = symbols || ['', 'k', 'M', 'B', 'T', 'Q', 'P'];
    let index = Math.floor(Math.log10(value) / 3);
    return (value / Math.pow(10, 3 * index)).toFixed(fixed || 2) + (schema[index] === undefined ? ('e' + index * 3) : schema[index]);
}

const formatDecimal = (decimal: string) => { 
    if(decimal.length > 2) return decimal.slice(0, 2);
    if(decimal.length === 2) return `${decimal}`;
    if(decimal.length === 1) return `${decimal.slice(0, 1)}0`;
    return "00";
};

const formatNumber = (number: string | number) => {
    if(Number.isNaN(Number(number))) return number;

    let num = number;
    if(typeof num === "string" && !Number.isNaN(Number(num))) num = Number(num);
    else num = Number(num);

    if(num === 0) return `${num}`;

  

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
};

const percentDifference = (el1: number, el2: number) => {
    if(el1 === 0) return 100;
    return 100.0 * (el2 - el1) / el1;
};

export { formatNumber, formatDecimal, setSign, percentDifference, numberShorter };