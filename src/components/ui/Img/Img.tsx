// React
import React, { useEffect, useState } from "react";

// static
import NoImageLogo from "public/static/images/svg/no_image_logo.svg";


const Img: React.FC<{ src: string, alt: string, off?: boolean }> = ({ 
    src = "",
    alt = "",
    off = false,
}) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
    }, [src]);

    if((error || !src) && !off) return <img style={{ objectFit: "contain", transform: "scale(.25, .25)" }} src={NoImageLogo.src} alt={"image not found"} />;
    return <img src={src} alt={alt} onError={() => setError(true)} />;
};

export default Img;
