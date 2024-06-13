import {IActivity} from "../models/IActivity";
import {IWBS} from "../models/IWBS";

export const isInstanceOfIActivity = (object: IWBS | IActivity): object is IActivity => {
    return "description" in object;
};
