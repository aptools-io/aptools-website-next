// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { UpdatesPage } from "src/components/pages";

// API
import { news } from "src/scripts/api/requests";
import { setNewsData } from "src/scripts/redux/slices/newsSlice";

const News = (data: IApiProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("Updates"));
        dispatch(
            setNewsData({
                news: data.news,
                categories: data.news_categories
            })
        );
    }, [data, dispatch]);

    return <UpdatesPage />;
};
export default News;

export async function getServerSideProps(context) {
    const { req } = context;

    return {
        notFound: true
        /* props: {
            headers: req.headers,
            news_categories: (await news.getNewsCategoriesData()) || [],
            news: (await news.getNewsData()) || []
        } */
    };
}
