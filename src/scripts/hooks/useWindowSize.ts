import { useState, useEffect } from "react";
import { EBreakpoints } from "src/types/common/adaptive";
import { a } from "../common/adaptive";


const useWindowSize = () => {
    const [media, setMedia] = useState(null);
    const [windowSize, setWindowSize] = useState({
            width: null,
            height: null,
    });

    useEffect(() => {
        setWindowSize({
            ...windowSize,
            ...{ width: media },
            ...{ height: window.innerHeight },
        });
    }, [media]);

    useEffect(() => {
        function handleResize() {
            const adapt = a({ 
                [EBreakpoints.LARGE]: EBreakpoints.LARGE, 
                [EBreakpoints.LAPTOP]: EBreakpoints.LAPTOP, 
                [EBreakpoints.TABLET]: EBreakpoints.TABLET, 
                [EBreakpoints.TABLET_MINI]: EBreakpoints.TABLET_MINI, 
                [EBreakpoints.MOBILE]: EBreakpoints.MOBILE, 
                [EBreakpoints.SMALL_MOBILE]: EBreakpoints.SMALL_MOBILE, 
                [EBreakpoints.MIN]: EBreakpoints.MIN
            }, window.innerWidth) as number;
            setMedia(adapt);
        }
        
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { ...windowSize };
};

export default useWindowSize;