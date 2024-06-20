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
            const newToGroup = new Set<string>([...state.toGroup, action.payload]);

            state.toGroup = Array.from(newToGroup);
        },
        removeFromGroup(state, action: PayloadAction<string>) {
            const newToGroup = new Set<string>(state.toGroup);

            newToGroup.delete(action.payload);

            state.toGroup = Array.from(newToGroup);
        },
        clear(state) {
            state.toGroup = [];
        }
    },
})

export const {
    addToGroup,
    removeFromGroup,
    clear
} = GroupSlice.actions
export default GroupSlice.reducer
