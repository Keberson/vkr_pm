import {TDependencyType} from "./TDependencyType";

interface IActivityDependency {
    id: number,
    id_predecessor: number,
    id_successor: number,
    type: TDependencyType
}

export {
    IActivityDependency
}
