import {IActivity} from "./IActivity";
import {IWBS} from "./IWBS";
import {ITree} from "./Tree";
import {IView} from "./IView";

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
    IGetActivitiesRes,
    IGetWBSRes,
    IGetTreeRes,
    IGetViewRes,
    IGetWBSChildsRes
};
