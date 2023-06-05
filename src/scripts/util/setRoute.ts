import { NextRouter } from "next/router";

const setRoute = (
    router: NextRouter, 
    delay: number, 
    url: string, 
    start: () => void) => 
{
    start();
    setTimeout(() => {
        router.push(url);
    } , delay);
};
    

export default setRoute;