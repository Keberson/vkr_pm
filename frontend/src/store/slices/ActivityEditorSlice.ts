import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {IActivity} from "../../types/IActivity";

interface ActivityEditorState {
    activity: IActivity,
    isShow: boolean
}

const initialState: ActivityEditorState = {
    activity: {
        id: -1,
        name: ``,
        description: '',
        date_start_plan: new Date(),
        date_finish_plan: new Date(),
        date_start_actual: new Date(),
        date_finish_actual: new Date(),
        status: "Не начата",
        project_id: -1
    },
    isShow: false
};

const activityEditorSlice = createSlice({
    name: 'ActivityEditor',
    initialState,
    reducers: {
        toggleActivityEditor(state) {
            state.isShow = !state.isShow;
        },
        setActivity(state, action: PayloadAction<IActivity>) {
            state.activity = action.payload;
        },
        clearActivity(state) {
            Object.assign(state.activity, initialState);
        }
    },
})

export const {
    toggleActivityEditor,
    setActivity,
    clearActivity
} = activityEditorSlice.actions
export default activityEditorSlice.reducer
