import {ICreateWBS} from "./IWBS";

interface ICreateWBSReq {
    wbs: ICreateWBS,
    childs: string[],
}

export {
    ICreateWBSReq
}
