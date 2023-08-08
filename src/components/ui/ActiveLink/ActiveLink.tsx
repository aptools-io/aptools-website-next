// React
import React, { Children } from "react";

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

    let className = child.props.className || "";

    if (router.asPath === props.href) {
        className = `${className} ${props.activeClassName ? props.activeClassName : ""}`.trim();
        return <span onMouseEnter={props.onMouseEnter} className={className}>{child.props.children}</span>;
    }
    
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if((e.target  as HTMLElement).closest("button")) return;
        if(child.props.target === "_blank") { window.open(props.href, "_blank").focus(); return; }
        setRoute(
            router, 
            300, 
            props.href, 
            () => dispatch(setLoading({ start: true, end: false }))
        );
    };
   
    return <span className={classNames([styles["active-link__link"], additiveClassName])}>
        {React.cloneElement(child, 
            { 
                className, 
                ...{ 
                    onClick: handleClick, 
                    href: props.href 
                } 
            })
        }
    </span>;
};

export default ActiveLink;
