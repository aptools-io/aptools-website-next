// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { Tabs } from "src/components/ui";
import { news } from "src/scripts/api/requests";

// Styles
import classNames from "classnames";
import styles from "./News.module.scss";


const Test = (props) => {
    
    return <div></div>
}

const News: React.FC<IComponent> = ({
    className 
}) => {
    const { newsData, newsCategoriesData } = useSelector((state: IRootState) => state.news);

    
    const classes = classNames([
        styles["news"],
        className
    ]);

    const handleCategories = newsCategoriesData?.map(x => { return {
        id: x.id,
        title: x.categoryTitle,
        action: async (test, id) => {
            const data = await news.getNewsData(10, id)
            test(data)
        }
    } }) || [];
    
    return (
        <div className={classes}>
            <Tabs dataArray={handleCategories} defaultEntry={newsData} itemsCount={false}>
                <Test></Test>
            </Tabs>
        </div>
    );
};

export default News;
