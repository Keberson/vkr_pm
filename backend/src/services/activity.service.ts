import {ICreateActivity} from "../models/IActivity";
import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";

const activity = {
    createActivity: sql('../sql/activity/create.sql'),
};

const createActivity = async (data: ICreateActivity) => {
    const dataList = [];
    const dataJSON = JSON.parse(JSON.stringify(data));

    for (const key in dataJSON) {
        dataList.push(dataJSON[key]);
    }

    await dbService.none(activity.createActivity, dataList);
};

export {
    createActivity
};
