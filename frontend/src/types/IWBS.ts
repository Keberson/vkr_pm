import {TStatus} from "./TStatus";

interface IWBS extends ICreateWBS{
    id: number,
    status: TStatus,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string | null,
    date_finish_actual: string | null,
}

interface ICreateWBS {
    name: string,
    project_id: number,
    id_view: number
}

export type {
    IWBS,
    ICreateWBS
};
