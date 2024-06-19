import {ICreateWBS} from "./IWBS";

interface IGetTreeReq {
    project: number,
    view: number
}

interface ICreateWBSReq {
    wbs: ICreateWBS,
    childs: string[],
}

interface IEditActivityReq {
    wbs: number,
    activity: {
        id: number,
        name: string,
        description: string,
        date_start_plan: string,
        date_finish_plan: string,
        date_start_actual: string,
        date_finish_actual: string,
        wbs: number,
        project_id: number
    }
}

interface IEditWBSReq {
    id: number,
    name: string,
    parent: number,
    oldParent: number
}

export type {
    IGetTreeReq, ICreateWBSReq, IEditActivityReq, IEditWBSReq
};