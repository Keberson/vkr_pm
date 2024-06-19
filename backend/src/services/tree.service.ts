import {ITreeNode} from "../models/ITreeNode";
import {IWBS} from "../models/IWBS";
import {IActivity} from "../models/IActivity";

import {getActivityIDByWBS, getEmptyActivityByProject} from "./link_activity_wbs.service";
import {isInstanceOfIActivity} from "../utils/isInstanceOfIActivity.util";
import {getActivitiesByProject, getActivityByID} from "./activity.service";
import {getWBSByID} from "./wbs.service";
import {getEmptyWBSByProject, getWBSChildsByParentID} from "./link_wbs.service";

const _recursiveFillTree = async (node: ITreeNode) => {
    for (const child of node.childs) {
        if (!isInstanceOfIActivity(child.value)) {
            const activitiesID = await getActivityIDByWBS(child.value.id);

            for (const id of activitiesID) {
                child.childs.push({
                    value: await getActivityByID(id),
                    childs: []
                });
            }

            const wbs = await getWBSChildsByParentID(child.value.id);

            for (const dependency of wbs) {
                child.childs.push({
                    value: await getWBSByID(dependency.id_child),
                    childs: []
                });
            }
        }

        await _recursiveFillTree(child);
    }
};

const getTree = async (projectID: number, view: number): Promise<ITreeNode> => {
    let wbs: IWBS[] = [];
    let activities: IActivity[] = [];
    const root: ITreeNode = {
        value: {
            id: -1,
            name: "Root",
            date_start_plan: "",
            date_finish_plan: "",
            date_start_actual: "",
            date_finish_actual: "",
            status: 'Не начата',
            project_id: projectID,
            id_view: -1
        },
        childs: []
    };

    if (view !== -1) {
        wbs = await getEmptyWBSByProject(projectID, view);
        activities = await getEmptyActivityByProject(projectID, view);
    } else {
        activities = await getActivitiesByProject(projectID);
    }

    for (const item of [...wbs, ...activities]) {
        root.childs.push({
            value: item,
            childs: []
        });
    }

    await _recursiveFillTree(root);

    return root;
}

export {
    getTree
};
