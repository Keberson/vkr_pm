import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import activityEditorSlice from "./slices/ActivityEditor"
import wbsEditorSlice from "./slices/WBSEditor"

export const store = configureStore({
    reducer: {
        activityEditor: activityEditorSlice,
        wbsEditor: wbsEditorSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
