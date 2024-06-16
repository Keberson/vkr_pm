import {IActivity} from "./IActivity";
import {IWBS} from "./IWBS";
import {ITree} from "./Tree";
import {IView} from "./IView";
import {IProject} from "./IProject";

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

interface IGetProjectsRes {
    result: IProject[]
}

export type {
    ILoginRes,
    IGetActivitiesRes,
    IGetWBSRes,
    IGetTreeRes,
    IGetViewRes,
    IGetWBSChildsRes,
    IGetProjectsRes
};
