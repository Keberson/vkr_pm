import {configureStore} from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import projectPageSlice from "./slices/projectPageSlice";

export const store = configureStore({
    reducer: {
        project: projectSlice,
        projectPage: projectPageSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
