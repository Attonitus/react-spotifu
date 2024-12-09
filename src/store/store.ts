import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { songSlice } from "./slices/songSlice";
import { uiSlice } from "./slices/uiSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        songs: songSlice.reducer,
        ui: uiSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;