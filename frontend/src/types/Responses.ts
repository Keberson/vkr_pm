import {IActivity} from "./IActivity";
import {IWBS} from "./IWBS";
import {ITree} from "./Tree";
import {IView} from "./IView";

interface ILoginRes {
    jwt: string,
    name: string,
    role: string
}

interface IGetActivitiesRes {
    result: IActivity[]
}

interface IGetWBSRes {
    result: IWBS[]
}

interface IGetTreeRes {
    result: ITree
}

interface IGetViewRes {
    result: IView[]
}

interface IGetWBSChildsRes {
    result: string[]
}

export type {
    ILoginRes,
    IGetActivitiesRes,
    IGetWBSRes,
    IGetTreeRes,
    IGetViewRes,
    IGetWBSChildsRes
};
