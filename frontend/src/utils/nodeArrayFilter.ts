import isInstanceOfIActivity from "./isInstanceOfIActivity";
import {NodeT} from "../types/Tree";

export const nodeArrayFilter = (nodes: NodeT[], toFind: NodeT, isExclude: boolean) => {
    const res = [];

    for (const stopNode of nodes) {
        let resCond = true;

        if (isInstanceOfIActivity(toFind) === isInstanceOfIActivity(stopNode)) {
            const activityNext = JSON.parse(JSON.stringify(toFind));
            const activityCur = JSON.parse(JSON.stringify(stopNode));

            for (const key in activityNext) {
                if (typeof activityNext[key] === "object" && typeof activityCur[key] === "object") {
                    if (JSON.stringify(activityCur[key]) !== JSON.stringify(activityNext[key])) {
                        resCond = false;
                    }
                } else if (activityNext[key] !== activityCur[key]) {
                    resCond = false;
                }
            }
        } else {
            resCond = false;
        }

        if (!isExclude && resCond) {
            res.push(stopNode);
        }
    }

    return res;
}
