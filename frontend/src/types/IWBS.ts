import {TStatus} from "./TStatus";

interface IWBS {
    id: number,
    name: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: TStatus,
    project_id: number,
}

interface ICreateWBS {
    name: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: TStatus,
    project_id: number,
}

export type {
    IWBS,
    ICreateWBS
};
