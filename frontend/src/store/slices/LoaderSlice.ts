import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface LoaderState {
    show: boolean
}

const initialState: LoaderState = {
    show: false
};

const LoaderSlice = createSlice({
    name: 'Loader',
    initialState,
    reducers: {
        setLoader(state, action: PayloadAction<boolean>) {
            state.show = action.payload;
        }
    },
})

export const {
    setLoader
} = LoaderSlice.actions
export default LoaderSlice.reducer
