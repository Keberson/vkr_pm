import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ToastState {
    show: "correct" | "error" | "none",
    message: string
}

const initialState: ToastState = {
    show: "none",
    message: ""
};

const ToastSlice = createSlice({
    name: 'Toast',
    initialState,
    reducers: {
        setToast(state, action: PayloadAction<"correct" | "error" | "none">) {
            state.show = action.payload;
        },
        setToastMessage(state, action: PayloadAction<string>) {
            state.message = action.payload;
        }
    },
})

export const {
    setToast,
    setToastMessage
} = ToastSlice.actions
export default ToastSlice.reducer
