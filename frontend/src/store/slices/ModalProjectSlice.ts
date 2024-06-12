import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ModalProjectState {
    show: "wbs" | "activity" | "none"
}

const initialState: ModalProjectState = {
    show: "none"
};

const ModalProjectSlice = createSlice({
    name: 'ModalProject',
    initialState,
    reducers: {
        setShow(state, action: PayloadAction<"wbs" | "activity" | "none">) {
            state.show = action.payload;
        }
    },
})

export const {
    setShow
} = ModalProjectSlice.actions
export default ModalProjectSlice.reducer
