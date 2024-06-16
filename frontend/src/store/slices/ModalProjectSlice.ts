import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ModalProjectState {
    show: boolean,
    type: "create" | "group"
}

const initialState: ModalProjectState = {
    show: false,
    type: "create"
};

const ModalProjectSlice = createSlice({
    name: 'ModalProject',
    initialState,
    reducers: {
        setModal(state, action: PayloadAction<boolean>) {
            state.show = action.payload;
        },
        setModalType(state, action: PayloadAction<"create" | "group">) {
            state.type = action.payload;
        }
    },
})

export const {
    setModal,
    setModalType
} = ModalProjectSlice.actions
export default ModalProjectSlice.reducer
