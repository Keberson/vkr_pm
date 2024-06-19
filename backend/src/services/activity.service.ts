import {IActivity, ICreateActivity} from "../models/IActivity";
import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {objectToDataList} from "../utils/objectToDataList.util";
import {IEditActivityReq} from "../models/Requests";
import {createLinkActivityWBS, deleteLinkActivityWBS, editLinkActivityWBS} from "./link_activity_wbs.service";
import {reDateWBS} from "./wbs.service";
import {reDateProject} from "./project.service";

const PATH = '../sql/activity'

const activity = {
    getByID: sql(`${PATH}/getByID.sql`),
    getByProject: sql(`${PATH}/getByProject.sql`),
    createActivity: sql(`${PATH}/create.sql`),
    deleteActivity: sql(`${PATH}/deleteActivity.sql`),
    editActivity: sql(`${PATH}/editActivity.sql`)
};

const getActivityByID = async (activityID: number): Promise<IActivity> => {
    return await dbService.oneOrNone(activity.getByID, [activityID]);
}

const getActivitiesByProject = async (projectID: number): Promise<IActivity[]> => {
    return await dbService.manyOrNone(activity.getByProject, [projectID]);
}

const createActivity = async (data: ICreateActivity) => {
    const status: 'Не начата' | 'Выполняется' | 'Завершена' = data.date_start_actual === '' ? 'Не начата' :  data.date_finish_actual === '' ? 'Выполняется' : 'Завершена';

    data.date_start_actual = data.date_start_actual === '' ? "-infinity" : data.date_start_actual;
    data.date_finish_actual = data.date_finish_actual === '' ? "+infinity" : data.date_finish_actual;

    await dbService.none(activity.createActivity, [...objectToDataList(data), status]);
};

const deleteActivity = async (data: number) => {
    await dbService.none(activity.deleteActivity, [data]);
};

const editActivity = async (id: number, data: IEditActivityReq) => {
    const activityData = data.activity;
    const oldWBS = Number(activityData.wbs);
    const newWBS = Number(data.wbs);
    const startActual = activityData.date_start_actual === "" ? "-infinity" : activityData.date_start_actual;
    const finishActual = activityData.date_finish_actual === "" ? "+infinity" : activityData.date_finish_actual;
    const status = startActual === "-infinity" ? "Не начата" : finishActual === "+infinity" ? "Выполняется" : "Завершена";

    await dbService.none(activity.editActivity, [activityData.name, activityData.date_start_plan, activityData.date_finish_plan, startActual, finishActual, status, activityData.description, id]);

    if (activityData.wbs !== Number(data.wbs)) {
        if (activityData.wbs === -1 && Number(data.wbs) !== -1) {
            await createLinkActivityWBS(id, newWBS);
        } else if (Number(data.wbs) !== -1) {
            await editLinkActivityWBS(id, oldWBS, newWBS);
        } else {
            await deleteLinkActivityWBS(id, oldWBS);
        }
    }

    if (activityData.wbs !== -1) {
        await reDateWBS(activityData.wbs);
    }

    if (Number(data.wbs) !== -1) {
        await reDateWBS(Number(data.wbs));
    }

    await reDateProject(activityData.project_id);
}

export {
    getActivityByID,
    getActivitiesByProject,
    createActivity,
    deleteActivity,
    editActivity
};
