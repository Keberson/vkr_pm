import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {IActivity} from "../../types/IActivity";
import {api} from "../../services/APIService";

interface ToastState {
    notStarted:  IActivity[],
    inWorking: IActivity[],
    done: IActivity[],
    changes: {
        from: IActivity,
        to: IActivity
    }[]
}

const initialState: ToastState = {
    notStarted:  [],
    inWorking: [],
    done: [],
    changes: []
};

const WorkerSlice = createSlice({
    name: 'Worker',
    initialState,
    reducers: {
        addToNotStartedOnIndex(state, action: PayloadAction<{index: number, activity: IActivity}>) {
            state.notStarted = [...state.notStarted.slice(0, action.payload.index), action.payload.activity, ...state.notStarted.slice(action.payload.index)];
        },
        addToInWorkingOnIndex(state, action: PayloadAction<{index: number, activity: IActivity}>) {
            state.inWorking = [...state.inWorking.slice(0, action.payload.index), action.payload.activity, ...state.inWorking.slice(action.payload.index)];
        },
        addToDoneOnIndex(state, action: PayloadAction<{index: number, activity: IActivity}>) {
            state.done = [...state.done.slice(0, action.payload.index), action.payload.activity, ...state.done.slice(action.payload.index)];
        },
        deleteFromNotStarted(state, action: PayloadAction<number>) {
            state.notStarted = state.notStarted.filter(item => item.id !== action.payload);
        },
        deleteFromInWorking(state, action: PayloadAction<number>) {
            state.inWorking = state.inWorking.filter(item => item.id !== action.payload);
        },
        deleteFromDone(state, action: PayloadAction<number>) {
            state.done = state.done.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(api.endpoints.getActivities.matchFulfilled, (state, action) => {
                state.notStarted = action.payload.result.filter(item => item.status === "Не начата");
                state.inWorking = action.payload.result.filter(item => item.status === "Выполняется");
                state.done = action.payload.result.filter(item => item.status === "Завершена");
            })
    }
})

export const {
    addToNotStartedOnIndex,
    addToInWorkingOnIndex,
    addToDoneOnIndex,
    deleteFromNotStarted,
    deleteFromInWorking,
    deleteFromDone,
} = WorkerSlice.actions
export default WorkerSlice.reducer
