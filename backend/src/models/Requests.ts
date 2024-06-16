import {ICreateWBS} from "./IWBS";

interface ILoginReq {
    login: string,
    password: string
}

interface ICreateWBSReq {
    wbs: ICreateWBS,
    childs: string[],
}

export {
    ILoginReq,
    ICreateWBSReq
}
