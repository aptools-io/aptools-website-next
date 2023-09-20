// React
import React, { useEffect, useState } from "react";

// static
import NoImageLogo from "public/static/images/svg/no_image_logo.svg";

const Img: React.FC<
    {
        src: string;
        alt: string;
        off?: boolean;
        customNoImageLogo?: string;
    } & IComponent
> = ({
    src = "",
    alt = "",
    off = false,
    customNoImageLogo = "",
    className = ""
}) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
    }, [src]);
    if ((error || !src) && !off && customNoImageLogo)
        return (
            <img
                className={className}
                src={customNoImageLogo}
                alt={"image not found"}
            />
        );
    if ((error || !src) && !off)
        return (
            <img
                className={className}
                style={{ objectFit: "contain", transform: "scale(.25, .25)" }}
                src={NoImageLogo.src}
                alt={"image not found"}
            />
        );
    return (
        <img
            className={className}
            src={src}
            alt={alt}
            onError={() => setError(true)}
        />
    );
};

export default Img;
