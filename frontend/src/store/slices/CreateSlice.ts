import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {ICreateActivity} from "../../types/IActivity";
import {ICreateWBS} from "../../types/IWBS";
import {ICreateView} from "../../types/IView";

interface CreateState {
    type: "activity" | "wbs" | "view",
    isSubmit: boolean,
    activity: ICreateActivity,
    wbs: ICreateWBS,
    view: ICreateView
}

const initialState: CreateState = {
    type: "activity",
    isSubmit: false,
    activity: {
        name: '',
        description: '',
        date_start_plan: '',
        date_finish_plan: '',
        date_start_actual: '',
        date_finish_actual: '',
        project_id: -1
    },
    wbs: {
        name: '',
        project_id: -1,
        id_view: -1
    },
    view: {
        name: '',
        project_id: -1
    }
};

const CreateSlice = createSlice({
    name: 'Create',
    initialState,
    reducers: {
        setActivity(state, action: PayloadAction<ICreateActivity>) {
            state.activity = action.payload;
        },
        setWBS(state, action: PayloadAction<ICreateWBS>) {
            state.wbs = action.payload;
        },
        setView(state, action: PayloadAction<ICreateView>) {
            state.view = action.payload;
        },
        setIsSubmit(state, action: PayloadAction<boolean>) {
            state.isSubmit = action.payload;
        },
        setType(state, action: PayloadAction<"activity" | "wbs" | "view">) {
            state.type = action.payload;
        }
    },
})

export const {
    setActivity,
    setWBS,
    setView,
    setIsSubmit,
    setType
} = CreateSlice.actions
export default CreateSlice.reducer
