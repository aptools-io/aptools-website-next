// React
import React from "react";

// Parts
import { 
    MainPageBanner, 
    MainPageBannerBottom, 
    MainPageDex, 
    MainPageProjects, 
    MainPageBlockchainStats, 
    MainPageListSwitchers, 
    MainPageToken
} from "./parts";


const MainPage: React.FC = () => {

    return (
        <>
            <MainPageBanner />
            <MainPageBannerBottom />
            <MainPageProjects />
            <MainPageDex />
            <MainPageBlockchainStats />
            <MainPageListSwitchers />
            <MainPageToken />
        </>
    );
};


export default MainPage;
