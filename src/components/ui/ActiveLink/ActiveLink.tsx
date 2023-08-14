// React
import React, { Children, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch } from "react-redux";
import { setLoading } from "src/scripts/redux/slices/loadingSlice";

// Styles
import setRoute from "src/scripts/util/setRoute";
import classNames from "classnames";
import styles from "./ActiveLink.module.scss";

// Util



const ActiveLink = ({ children, additiveClassName = "", ...props }) => {
    const router = useRouter();
    const child = Children.only(children);
    const dispatch = useDispatch();
    const [mouseDown, setMouseDown] = useState(false);

    let className = `${child.props.className} ${styles["active-link__content"]}` || "";

    if (router.asPath === props.href) {
        className = `${className} ${props.activeClassName ? props.activeClassName : ""}`.trim();
        return <span onMouseEnter={props.onMouseEnter} className={className}>{child.props.children}</span>;
    }
    
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        let link = null;
        const closestLink = (e.target as HTMLElement).closest("a");
        if((e.target as HTMLElement).closest("button")) return;
        if(child.props.target === "_blank") { window.open(props.href, "_blank").focus(); return; }
        if(closestLink.classList.contains("prior-link")) link = closestLink.href;

        setRoute(
            router, 
            300, 
            link || props.href, 
            () => dispatch(setLoading({ start: true, end: false }))
        );
    };

    const handleMouseDown = (e) => setMouseDown(true);
    const handleMouseUp = () => setMouseDown(false);
   
    return (
        <span 
            className={classNames([styles["active-link__link"], additiveClassName])} 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            
            {React.cloneElement(child, 
                { 
                    className, 
                    
                    ...{ 
                        onClick: handleClick, 
                        href: props.href 
                    } 
                })
            }
            {/* <div className={classNames([styles["active-link__clicked"], {[styles["active"]]: mouseDown}])} ></div> */}
        </span>
    );
};

export default ActiveLink;
