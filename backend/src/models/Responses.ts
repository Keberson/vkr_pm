import {IActivity} from "./IActivity";

interface IGetActivitiesRes {
    result: IActivity[]
}

interface ILoginRes {
    jwt: string,
    name: string,
    role: string
}

export {
    IGetActivitiesRes,
    ILoginRes
}
