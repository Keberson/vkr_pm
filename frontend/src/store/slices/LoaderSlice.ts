import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ILoader {
    show: boolean,
    from: string
}

interface LoaderState {
    show: boolean,
    queue: string[]
}

const initialState: LoaderState = {
    show: false,
    queue: []
};

const LoaderSlice = createSlice({
    name: 'Loader',
    initialState,
    reducers: {
        setLoader(state, action: PayloadAction<ILoader>) {
            if (action.payload.show) {
                if (!state.queue.includes(action.payload.from)) {
                    state.queue = [...state.queue, action.payload.from];
                }
            } else {
                state.queue = state.queue.filter(value => value !== action.payload.from);
            }

            state.show = state.queue.length > 0;
        }
    },
})

export const {
    setLoader
} = LoaderSlice.actions
export default LoaderSlice.reducer
