import {IActivity, ICreateActivity} from "../models/IActivity";
import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";

const activity = {
    getByProject: sql('../sql/activity/getByProject.sql'),
    createActivity: sql('../sql/activity/create.sql'),
};

const getActivities = async (projectID: number) => {
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
    getActivities,
    createActivity
};
