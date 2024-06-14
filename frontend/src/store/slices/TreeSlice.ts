import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {ITree, NodeT, Tree, TreeNode} from "../../types/Tree";
import {nodeArrayFilter} from "../../utils/nodeArrayFilter";
import {TStatus} from "../../types/TStatus";
import {IFilterProject} from "../../types/IFilterProject";
import {activityApi} from "../../services/ActivityService";
import {IActivity} from "../../types/IActivity";
import {IWBS} from "../../types/IWBS";
import {wbsApi} from "../../services/WBSService";
import {treeApi} from "../../services/TreeService";

interface treeState {
    tree: Tree,
    activities: IActivity[],
    wbs: IWBS[],
    stopNode: NodeT[],
    filters: IFilterProject
}

const initialState: treeState = {
    tree: new Tree({
        id: -1,
        name: '',
        date_start_plan: '',
        date_finish_plan: '',
        date_start_actual: '',
        date_finish_actual: '',
        status: "Не начата",
        project_id: -1,
        id_view: -1
    }),
    activities: [],
    wbs: [],
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
    extraReducers: (builder) => {
        builder
            .addMatcher(activityApi.endpoints.getActivities.matchFulfilled, (state, action) => {
                state.activities = action.payload.result;
            })
            .addMatcher(wbsApi.endpoints.getWBS.matchFulfilled, (state, action) => {
                state.wbs = action.payload.result;
            })
            .addMatcher(treeApi.endpoints.getTree.matchFulfilled, (state, action) => {
                const walk = (node: TreeNode, nodeGot: ITree) => {
                    node.setValue(nodeGot.value);

                    for (const child of nodeGot.childs) {
                        const treeNode = new TreeNode(child.value, node);

                        node.addChildren(treeNode);
                        walk(treeNode, child);
                    }
                };

                walk(state.tree.getRoot(), action.payload.result);
            })
    }
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
