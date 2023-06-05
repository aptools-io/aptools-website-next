// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles

// Other
import classNames from "classnames";
import { setLoading } from "src/scripts/redux/slices/loadingSlice";
import { LogoFull } from "src/components/svg";
import styles from "./MainLoading.module.scss";


const MainLoading: React.FC<IComponent> = ({ 
    className
}) => {
    const router = useRouter();
    const { start, end } = useSelector((state: IRootState) => state.loading.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            dispatch(setLoading({ start: true, end: true }));
        });
        return () => {
            router.events.off("routeChangeComplete", () => dispatch(setLoading({ start: true, end: true })));
        };
    }, []);

    useEffect(() => {
        
    }, [end]);

    const classes = classNames([
        styles["main-loading"],
        { [styles["start"]]: start },
        { [styles["end"]]: end },
        className
    ]);
    
    return (
        <div className={classes}>
            <LogoFull />
        </div>
    );
};


export default MainLoading;
