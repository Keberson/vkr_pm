import {ITreeNode} from "../models/ITreeNode";
import {IWBS} from "../models/IWBS";
import {IActivity} from "../models/IActivity";
import {getActivityIDByWBS, getEmptyActivityByProject} from "./link_activity_wbs.service";
import {isInstanceOfIActivity} from "../utils/isInstanceOfIActivity.util";
import {getActivityByID} from "./activity.service";
import {getEmptyWBSByProject, getWBSDependencyByParentID} from "./wbs_dependency.service";
import {getWBSByID} from "./wbs.service";
import {getActivityDependencyByParentID, getEmptyActivityByProjectDependency} from "./activity_dependency.service";
import {intersectionBy} from "lodash";

const getTree = async (projectID: number): Promise<ITreeNode> => {
    const wbs: IWBS[] = await getEmptyWBSByProject(projectID);
    const activitiesLink: IActivity[] = await getEmptyActivityByProject(projectID);
    const activitiesDependency: IActivity[] = await getEmptyActivityByProjectDependency(projectID);
    const activities = intersectionBy(activitiesLink, activitiesDependency, 'id');
    const root: ITreeNode = {
        value: {
            id: -1,
            name: "Root",
            date_start_plan: new Date(),
            date_start_finish: new Date(),
            date_start_actual: new Date(),
            date_finish_actual: new Date(),
            status: 'Не начата',
            project_id: projectID
        },
        childs: []
    };

    for (const item of [...wbs, ...activities]) {
        root.childs.push({
            value: item,
            childs: []
        });
    }

    const recursiveFillTree = async (node: ITreeNode) => {
        for (const child of node.childs) {
            if (!isInstanceOfIActivity(child.value)) {
                const activitiesID = await getActivityIDByWBS(child.value.id);

                for (const id of activitiesID) {
                    child.childs.push({
                        value: await getActivityByID(id),
                        childs: []
                    });
                }

                const wbs = await getWBSDependencyByParentID(child.value.id);

                for (const dependency of wbs) {
                    child.childs.push({
                        value: await getWBSByID(dependency.id_wbs_child),
                        childs: []
                    });
                }
            } else {
                const activities = await getActivityDependencyByParentID(child.value.id);

                for (const dependency of activities) {
                    child.childs.push({
                        value: await getActivityByID(dependency.id_successor),
                        childs: []
                    });
                }
            }

            await recursiveFillTree(child);
        }
    };

    await recursiveFillTree(root)

    return root;
}

export {
    getTree
};
