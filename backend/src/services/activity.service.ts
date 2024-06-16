import {IActivity, ICreateActivity} from "../models/IActivity";
import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {objectToDataList} from "../utils/objectToDataList.util";

const PATH = '../sql/activity'

const activity = {
    getByID: sql(`${PATH}/getByID.sql`),
    getByProject: sql(`${PATH}/getByProject.sql`),
    createActivity: sql(`${PATH}/create.sql`),
    deleteActivity: sql(`${PATH}/deleteActivity.sql`),
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

const deleteActivity = async (data: number) => {
    await dbService.none(activity.deleteActivity, [data]);
};

export {
    getActivityByID,
    getActivitiesByProject,
    createActivity,
    deleteActivity
};
