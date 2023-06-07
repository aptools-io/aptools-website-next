// React
import React from "react";

// Parts
import { MainPageBanner, MainPageBannerBottom, MainPageDex, MainPageProjects } from "./parts";


const MainPage: React.FC = () => {

    return (
        <>
            <MainPageBanner />
            <MainPageBannerBottom />
            <MainPageProjects />
            <MainPageDex />
        </>
    );
};


export default MainPage;
