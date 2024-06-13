import {IActivity, ICreateActivity} from "../models/IActivity";
import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";

const activity = {
    getByID: sql('../sql/activity/getByID.sql'),
    getByProject: sql('../sql/activity/getByProject.sql'),
    createActivity: sql('../sql/activity/create.sql'),
};

const getActivityByID = async (activityID: number): Promise<IActivity> => {
    return await dbService.oneOrNone(activity.getByID, [activityID]);
}

const getActivities = async (projectID: number): Promise<IActivity[]> => {
    return await dbService.manyOrNone(activity.getByProject, [projectID]);
}

const createActivity = async (data: ICreateActivity) => {
    const dataList = [];
    const dataJSON = JSON.parse(JSON.stringify(data));

    for (const key in dataJSON) {
        dataList.push(dataJSON[key]);
    }

    await dbService.none(activity.createActivity, dataList);
};

export {
    getActivityByID,
    getActivities,
    createActivity
};
