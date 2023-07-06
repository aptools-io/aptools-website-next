import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    "name": "news",
    "initialState": {
        "newsData": null as IApiNews,
        "newsCategoriesData": null as IApiNewsCategory[]
    },
    "reducers": {
        "setNewsData": (state, action: PayloadAction<{ news: IApiNews, categories: IApiNewsCategory[] }>) => {
            state.newsData = action.payload?.news || null;
            state.newsCategoriesData = action.payload?.categories || null;
        },
    }
});

export const { setNewsData } = newsSlice.actions;
export default newsSlice.reducer;
