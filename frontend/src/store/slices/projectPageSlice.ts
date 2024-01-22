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

    },
    extraReducers: (builder) =>
        builder
});

export const {

} = projectPageSlice.actions;

export default projectPageSlice.reducer;
