import { createSlice } from '@reduxjs/toolkit'

import {IView} from "../../types/IView";

import {api} from "../../services/APIService";

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
            .addMatcher(api.endpoints.getView.matchFulfilled, (state, action) => {
                state.views = action.payload.result;
            })
    }
})

export const {

} = ViewSlice.actions
export default ViewSlice.reducer
