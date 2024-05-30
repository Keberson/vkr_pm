import {TStatus} from "./TStatus";


export default interface IActivity {
    id: number,
    name: string,
    description: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    others: JSON,
    status: TStatus,
    project_id: number
}
