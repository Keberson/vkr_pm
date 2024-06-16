import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {IActivity} from "../../types/IActivity";
import {IWBS} from "../../types/IWBS";

interface EditorState {
    activity: IActivity,
    wbs: IWBS,
    isShow: boolean,
    showType: "wbs" | "activity"
}

const initialState: EditorState = {
    activity: {
        id: -1,
        name: ``,
        description: '',
        date_start_plan: '',
        date_finish_plan: '',
        date_start_actual: '',
        date_finish_actual: '',
        status: "Не начата",
        project_id: -1
    },
    wbs: {
        id: -1,
        name: ``,
        date_start_plan: '',
        date_finish_plan: '',
        date_start_actual: '',
        date_finish_actual: '',
        status: "Не начата",
        project_id: -1,
        id_view: -1
    },
    isShow: false,
    showType: "activity"
};

const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        toggleEditor(state) {
            state.isShow = !state.isShow;
        },
        setActivity(state, action: PayloadAction<IActivity>) {
            state.activity = action.payload;
        },
        setWBS(state, action: PayloadAction<IWBS>) {
            state.wbs = action.payload;
        },
        setEditorType(state, action: PayloadAction<"wbs" | "activity">) {
            state.showType = action.payload;
        },
        clear(state) {
            Object.assign(state.activity, initialState);
        },
    },
})

export const {
    toggleEditor,
    setActivity,
    setWBS,
    setEditorType,
    clear
} = editorSlice.actions
export default editorSlice.reducer
