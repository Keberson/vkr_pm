import {IActivity, ICreateActivity} from "../models/IActivity";
import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {objectToDataList} from "../utils/objectToDataList.util";

const activity = {
    getByID: sql('../sql/activity/getByID.sql'),
    getByProject: sql('../sql/activity/getByProject.sql'),
    createActivity: sql('../sql/activity/create.sql'),
};

const getActivityByID = async (activityID: number): Promise<IActivity> => {
    return await dbService.oneOrNone(activity.getByID, [activityID]);
}

const getActivitiesByProject = async (projectID: number): Promise<IActivity[]> => {
    return await dbService.manyOrNone(activity.getByProject, [projectID]);
}

const createActivity = async (data: ICreateActivity) => {
    await dbService.none(activity.createActivity, objectToDataList(data));
};

export {
    getActivityByID,
    getActivitiesByProject,
    createActivity
};
