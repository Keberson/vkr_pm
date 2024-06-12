import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {NodeT, Tree} from "../../types/Tree";
import {nodeArrayFilter} from "../../utils/nodeArrayFilter";
import {TStatus} from "../../types/TStatus";
import {IFilterProject} from "../../types/IFilterProject";

interface treeState {
    tree: Tree,
    stopNode: NodeT[],
    filters: IFilterProject
}

const initialState: treeState = {
    tree: new Tree({
        id: -1,
        name: ``,
        date_start_plan: new Date(),
        date_finish_plan: new Date(),
        date_start_actual: new Date(),
        date_finish_actual: new Date(),
        status: "Не начата",
        project_id: -1
    }),
    stopNode: [],
    filters: {}
};

const treeSlice = createSlice({
    name: 'TreeSlice',
    initialState,
    reducers: {
        addStopNode(state, action: PayloadAction<NodeT>) {
            state.stopNode.push(action.payload);
        },
        deleteStopNode(state, action: PayloadAction<NodeT>) {
            state.stopNode = nodeArrayFilter(state.stopNode, action.payload, true);
        },
        setTree(state, action: PayloadAction<Tree>) {
            state.tree = action.payload;
        },
        setFilterName(state, action: PayloadAction<string>) {
            state.filters['name'] = action.payload;
        },
        setFilterStatus(state, action: PayloadAction<TStatus>) {
            state.filters['status'] = action.payload;
        },
        clearFilterName(state) {
            delete state.filters.name;
        },
        clearFilterStatus(state) {
            delete state.filters.status;
        }
    },
})

export const {
    addStopNode,
    deleteStopNode,
    setTree,
    setFilterName,
    setFilterStatus,
    clearFilterName,
    clearFilterStatus
} = treeSlice.actions
export default treeSlice.reducer
