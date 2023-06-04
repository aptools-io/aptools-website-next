import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ children, ...props }) => {
    const router = useRouter();
    const child = Children.only(children);

    let className = child.props.className || "";

    if (router.asPath === props.href) {
        className = `${className} ${props.activeClassName ? props.activeClassName : ""}`.trim();
        return <span onMouseEnter={props.onMouseEnter} className={className}>{child.props.children}</span>;
    }

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
