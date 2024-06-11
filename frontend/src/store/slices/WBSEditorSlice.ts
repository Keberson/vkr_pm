import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {IWBS} from "../../types/IWBS";

interface WBSEditorState {
    wbs: IWBS,
    isShow: boolean
}

const initialState: WBSEditorState = {
    wbs: {
        id: -1,
        name: ``,
        date_start_plan: new Date(),
        date_finish_plan: new Date(),
        date_start_actual: new Date(),
        date_finish_actual: new Date(),
        status: "Не начато",
        project_id: -1
    },
    isShow: false
};

const WBSEditorSlice = createSlice({
    name: 'ActivityEditor',
    initialState,
    reducers: {
        toggleWBSEditor(state) {
            state.isShow = !state.isShow;
        },
        setWBS(state, action: PayloadAction<IWBS>) {
            state.wbs = action.payload;
        },
        clearWBS(state) {
            Object.assign(state.wbs, initialState);
        }
    },
})

export const {
    toggleWBSEditor,
    setWBS,
    clearWBS
} = WBSEditorSlice.actions
export default WBSEditorSlice.reducer
