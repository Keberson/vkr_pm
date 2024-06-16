import {TStatus} from "./TStatus";

interface IActivity {
    id: number,
    name: string,
    description: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
    status: TStatus,
    project_id: number
}

interface ICreateActivity {
    name: string,
    description: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
    status: TStatus,
    project_id: number
}

export type {
    IActivity,
    ICreateActivity
}
