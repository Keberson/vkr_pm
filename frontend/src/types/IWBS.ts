import {TStatus} from "./TStatus";

interface IWBS extends ICreateWBS{
    id: number,
}

interface ICreateWBS {
    name: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
    status: TStatus,
    project_id: number,
    id_view: number
}

export type {
    IWBS,
    ICreateWBS
};
