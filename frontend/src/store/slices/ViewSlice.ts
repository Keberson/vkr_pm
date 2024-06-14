import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {IView} from "../../types/IView";
import {viewApi} from "../../services/ViewService";

interface ViewState {
    views: IView[]
}

const initialState: ViewState = {
    views: []
};

const ViewSlice = createSlice({
    name: 'View',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addMatcher(viewApi.endpoints.getView.matchFulfilled, (state, action) => {
                state.views = action.payload.result;
            })
    }
})

export const {

} = ViewSlice.actions
export default ViewSlice.reducer
