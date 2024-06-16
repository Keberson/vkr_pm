import {NodeT} from "../types/Tree";
import {IActivity} from "../types/IActivity";

const isInstanceOfIActivity = (object: NodeT): object is IActivity => {
    return "description" in object;
};

export default isInstanceOfIActivity;
