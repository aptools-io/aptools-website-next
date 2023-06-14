// React
import React from "react";

// Styles
import classNames from "classnames";
import { RendererType } from "lottie-web";
import { useLottie } from "lottie-react";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./AptLogoBanner.module.scss";

// Lottie
import dotsData from "./data/dots.json";
import linesData from "./data/lines.json";

// Hooks

const options = {
    renderer: "html" as RendererType,
    loop: true,
    autoplay: true,
};

const LinesComponent: React.FC = () => {
    return useLottie({...options, animationData: linesData}, { height: "100%" }).View;
};

const DotsComponent: React.FC = () => {
    return useLottie({...options, animationData: dotsData}, { height: "100%" }).View;
};

const AptLogoBanner: React.FC<IAptLogoBannerProps> = ({ 
    center = true,
    className 
}) => {
    const { width } = useWindowSize();
    const classes = classNames([
        styles["apt-logo-banner"],
        className
    ]);

    return (
        <div className={classes}>
            <div key={width} className={styles["apt-logo-banner__logo-dots"]}>
                <DotsComponent key={width} />
                
                {center && <div className={styles["apt-logo-banner__logo-lines"]}>
                    <LinesComponent key={width} />
                </div>}
            </div>
            
            
        </div>
    );
};

export default AptLogoBanner;
