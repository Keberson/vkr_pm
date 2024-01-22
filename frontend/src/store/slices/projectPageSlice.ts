import {createSlice} from "@reduxjs/toolkit";

export interface ProjectPageState {
    view_state: 'tree' | 'table',
    view_id: number,
}

const initialState: ProjectPageState = {
    view_state: 'table',
    view_id: -1
};

export const projectPageSlice = createSlice({
    name: 'projectPage',
    initialState,
    reducers: {
        changeViewState: (state, action) => {
            state.view_state = action.payload;
        },
        changeViewID: (state, action) => {
            state.view_id = action.payload;
        }
    },
    extraReducers: (builder) =>
        builder
});

export const {
    changeViewState,
    changeViewID
} = projectPageSlice.actions;

export default projectPageSlice.reducer;
