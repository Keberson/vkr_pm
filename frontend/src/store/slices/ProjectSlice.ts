import { createSlice } from '@reduxjs/toolkit'

import {IProject} from "../../types/IProject";
import {api} from "../../services/APIService";

interface projectState {
    projects: IProject[]
}

const initialState: projectState = {
    projects: []
};

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addMatcher(api.endpoints.getProjects.matchFulfilled, (state, action) => {
                state.projects = action.payload.result;
            })
    }
})

export const {

} = projectSlice.actions
export default projectSlice.reducer
