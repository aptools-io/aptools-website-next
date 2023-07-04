// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { NewsPage } from "src/components/pages";

// API
import { news } from "src/scripts/api/requests";

const News = (data: IApiProps) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("News"));
        console.log(data);
    }, [data, dispatch]);

    return <NewsPage />;
}; 
export default News;

export async function getServerSideProps(context) {

    const { req } = context;
    return { props: {
        "headers": req.headers,
        "categories": await news.getNewsCategoriesData() || [],
        "news": await news.getNewsData() || [],
    } };
}
