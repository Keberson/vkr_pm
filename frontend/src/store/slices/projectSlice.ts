import {createSlice} from "@reduxjs/toolkit";
import ITask from "../../types/ITask";
import IWBS from "../../types/IWBS";
import ITaskWBSLink from "../../types/ITaskWBSLink";

export interface ProjectState {
    tasks: ITask[],
    wbses: IWBS[],
    links: ITaskWBSLink[]
}

const initialState: ProjectState = {
    tasks: [
        {
            id: 1,
            title: "Task 1",
            date_start_plan: "2022-01-01",
            date_finish_plan: "2022-01-10",
            date_start_actual: "2022-01-05",
            date_finish_actual: "2022-01-15",
            status: "Выполнено"
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description for Task 2",
            date_start_plan: "2022-01-15",
            date_finish_plan: "2022-01-20",
            status: "Выполняется"
        },
        {
            id: 3,
            title: "Task 3",
            date_start_plan: "2022-02-01",
            date_finish_plan: "2022-02-10",
            status: "Не начато"
        },
        {
            id: 4,
            title: "Task 4",
            date_start_plan: "2022-02-01",
            date_finish_plan: "2022-02-10",
            status: "Не начато"
        },
        {
            id: 5,
            title: "Task 5",
            date_start_plan: "2022-02-01",
            date_finish_plan: "2022-02-10",
            status: "Не начато"
        },
        {
            id: 6,
            title: "Task 6",
            date_start_plan: "2022-02-01",
            date_finish_plan: "2022-02-10",
            status: "Не начато"
        },
    ],
    wbses: [
        {
            id: 101,
            title: 'WBS 101',
            view_id: 1
        },
        {
            id: 102,
            title: 'WBS 102',
            view_id: 1
        },
        {
            id: 103,
            title: 'WBS 103',
            view_id: 2
        },
        {
            id: 104,
            title: 'WBS 104',
            view_id: 2
        },
    ],
    links: [
        {
            id: 1,
            id_task: 1,
            id_wbs: 101
        },
        {
            id: 2,
            id_task: 2,
            id_wbs: 101
        },
        {
            id: 3,
            id_task: 3,
            id_wbs: 101
        },
        {
            id: 4,
            id_task: 4,
            id_wbs: 102
        },
        {
            id: 5,
            id_task: 5,
            id_wbs: 102
        },
        {
            id: 6,
            id_task: 6,
            id_wbs: 102
        },
        {
            id: 7,
            id_task: 1,
            id_wbs: 103
        },
        {
            id: 8,
            id_task: 3,
            id_wbs: 103
        },
        {
            id: 9,
            id_task: 5,
            id_wbs: 103
        },
        {
            id: 10,
            id_task: 2,
            id_wbs: 104
        },
        {
            id: 11,
            id_task: 4,
            id_wbs: 104
        },
        {
            id: 12,
            id_task: 6,
            id_wbs: 104
        },
    ]
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>
        builder
});

export const {

} = projectSlice.actions;

export default projectSlice.reducer;
