import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import activityEditorSlice from "./slices/ActivityEditorSlice"
import wbsEditorSlice from "./slices/WBSEditorSlice"
import treeSlice from "./slices/TreeSlice"

export const store = configureStore({
    reducer: {
        activityEditor: activityEditorSlice,
        wbsEditor: wbsEditorSlice,
        tree: treeSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
