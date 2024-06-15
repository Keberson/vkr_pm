import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface GroupState {
    toGroup: string[]
}

const initialState: GroupState = {
    toGroup: []
};

const GroupSlice = createSlice({
    name: 'Group',
    initialState,
    reducers: {
        addToGroup(state, action: PayloadAction<string>) {
            state.toGroup = [...state.toGroup, action.payload];
        },
        removeFromGroup(state, action: PayloadAction<string>) {
            state.toGroup = state.toGroup.filter(value => value !== action.payload);
        }
    },
})

export const {
    addToGroup,
    removeFromGroup
} = GroupSlice.actions
export default GroupSlice.reducer
