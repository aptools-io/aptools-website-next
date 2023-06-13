import { TAdaptive } from "src/types/common/adaptive";

const a = (media: TAdaptive, windowWidth: number): any => {
    if(windowWidth === null) return null;
    const breakpoints = Object.keys(media);
    const breakpoint = breakpoints.reverse().find(x => Number(x) <= windowWidth);
    return media[breakpoint] as any;
};

export { a };