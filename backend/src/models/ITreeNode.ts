import {IActivity} from "./IActivity";
import {IWBS} from "./IWBS";

interface ITreeNode {
    value: IWBS | IActivity,
    childs: ITreeNode[]
}

export {
    ITreeNode
}
