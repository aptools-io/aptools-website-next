// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { Tabs } from "src/components/ui";
import { news } from "src/scripts/api/requests";
import { Grid, GridWrapper } from "src/components/general";
import classNames from "classnames";
import NewsList from "../NewsList/NewsList";
import UpdatesSide from "../UpdatesSide/UpdatesSide";


// Styles
import styles from "./News.module.scss";


const News: React.FC<IComponent> = ({
    className 
}) => {
    const { newsData, newsCategoriesData } = useSelector((state: IRootState) => state.news);
    // console.log(newsData, newsCategoriesData)
    console.log(newsData)
    
    const classes = classNames([
        styles["news"],
        className
    ]);

    const handleCategories = newsCategoriesData?.map(x => { return {
        id: x.id,
        title: x.categoryTitle,
        action: async (setCustomEntry, setLoading, id) => {
            const data = await news.getNewsData(10, id).then(e => {
                setTimeout(() => {
                    setLoading(false);
                }, 200);
                return e;
            });
            setCustomEntry(data);
        }
    }; }) || [];
    
    return (
        <div className={classes}>
            <Grid columns={3}>
                <GridWrapper gridWidth={2}>
                    <Tabs dataArray={handleCategories} defaultEntry={newsData} itemsCount={false}>
                        <NewsList />
                    </Tabs>
                </GridWrapper>
                <GridWrapper gridWidth={1}>
                    <UpdatesSide />
                </GridWrapper>
            </Grid>
        </div>
    );
};

export default News;
