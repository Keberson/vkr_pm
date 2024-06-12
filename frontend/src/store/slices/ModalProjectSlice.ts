import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ModalProjectState {
    show: boolean;
}

const initialState: ModalProjectState = {
    show: false
};

const ModalProjectSlice = createSlice({
    name: 'ModalProject',
    initialState,
    reducers: {
        setModal(state, action: PayloadAction<boolean>) {
            state.show = action.payload;
        }
    },
})

export const {
    setModal
} = ModalProjectSlice.actions
export default ModalProjectSlice.reducer
