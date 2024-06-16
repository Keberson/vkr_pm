import {ICreateWBS} from "./IWBS";

interface IGetTreeReq {
    project: number,
    view: number
}

interface ICreateWBSReq {
    wbs: ICreateWBS,
    childs: string[],
}

export type {
    IGetTreeReq, ICreateWBSReq
};
