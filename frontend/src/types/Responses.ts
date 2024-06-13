import {IActivity} from "./IActivity";
import {IWBS} from "./IWBS";
import {ITree} from "./Tree";

interface IGetActivitiesRes {
    result: IActivity[]
}

interface IGetWBSRes {
    result: IWBS[]
}

interface IGetTreeRes {
    result: ITree
}

export type {
    IGetActivitiesRes,
    IGetWBSRes,
    IGetTreeRes
};
