import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WSocket } from "src/scripts/websocket/websocket";

const statsAptosSlice = createSlice({
    "name": "statsAptos",
    "initialState": {
        "data": null as IWSocketStats,
        "websocket": null as { ws: WSocket, wsRef: WebSocket },
        "transactions": null as IWSocketStatsTransaction[]
    },
    "reducers": {
        "setAptosStatsData": (state, action: PayloadAction<IWSocketStats>) => {
            state.data = action.payload;
        },
        "setTransactionsData": (state, action: PayloadAction<IWSocketStatsTransaction[]>) => {
            state.transactions = action.payload;
        },
        "setWebsocket": (state, action: PayloadAction<{ ws: WSocket, wsRef: WebSocket }>) => {
            state.websocket = action.payload;
        } 
    }
});

export const { setAptosStatsData, setTransactionsData, setWebsocket } = statsAptosSlice.actions;
export default statsAptosSlice.reducer;
