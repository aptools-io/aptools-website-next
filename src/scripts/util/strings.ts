
const concatString = (string: string | number, left: string = "", right: string = "") => { 
    if(string === "-" || !string) return "-";
    return `${left}${string}${right}`;
};

const shortenHashString = (string: string, divider = [9, 6]) => { 
    if(string === "-" || !string) return "-";
    if(string.length < 16 || divider[0] === 0 && divider[1] === 0) return string;
    
    return `${string.slice(0, divider[0])}...${string.slice(-divider[1])}`;
};


export { concatString, shortenHashString };