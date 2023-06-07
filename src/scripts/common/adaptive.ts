import { TAdaptive } from "src/types/common/adaptive";

const a = (media: TAdaptive, windowWidth: number, func: boolean = false): number | React.ReactNode => {
    if(windowWidth === null) return null;
    const breakpoints = Object.keys(media);
    const breakpoint = breakpoints.reverse().find(x => Number(x) <= windowWidth);
    if(func) return media[breakpoint] as React.ReactNode;
    return media[breakpoint] as number;
}

export { a };