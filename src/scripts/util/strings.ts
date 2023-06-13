
const concatString = (string: string | number, left: string = "", right: string = "") => { 
    if(string === "-" || !string) return "-";
    return `${left}${string}${right}`;
};

const shortenHashString = (string: string) => { 
    if(string === "-" || !string) return "-";
    if(string.length < 16) return string;
    
    return `${string.slice(0, 9)}...${string.slice(-6)}`;
};


export { concatString, shortenHashString };