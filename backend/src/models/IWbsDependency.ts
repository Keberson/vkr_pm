import {TDependencyType} from "./TDependencyType";

interface IWbsDependency {
    id: number,
    id_wbs_parent: number,
    id_wbs_child: number,
    type: TDependencyType,
}

export {
    IWbsDependency
};
