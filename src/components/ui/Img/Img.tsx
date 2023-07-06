// React
import React, { useState } from "react";

// static
import NoImageLogo from "public/static/images/svg/no_image_logo.svg";


const Img: React.FC<{ src: string, alt: string }> = ({ 
    src = "",
    alt = ""
}) => {
    const [error, setError] = useState(false);

    if(error) return <img style={{ objectFit: "contain", transform: "scale(.25, .25)" }} src={NoImageLogo.src} alt={"image not found"} />
    return <img src={src} alt={alt} onError={() => setError(true)} />
};

export default Img;
