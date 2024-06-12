import {TStatus} from "./TStatus";

interface IActivity {
    id: number,
    name: string,
    description: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: TStatus,
    project_id: number
}

interface ICreateActivity {
    name: string,
    description: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: TStatus,
    project_id: number
}

export type {
    IActivity,
    ICreateActivity
}
