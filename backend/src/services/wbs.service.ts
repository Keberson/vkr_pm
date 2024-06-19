import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IWBS} from "../models/IWBS";
import {objectToDataList} from "../utils/objectToDataList.util";
import {ICreateWBSReq, IEditWBSReq} from "../models/Requests";
import {getActivityIDByWBS} from "./link_activity_wbs.service";
import {createLinkWBS, deleteLinkWBS, editLinkWBS, getWBSChildsByParentID, getWBSParentsByChildID} from "./link_wbs.service";
import {getActivityByID} from "./activity.service";

const PATH = "../sql/wbs"

const wbs = {
    getByID: sql(`${PATH}/getByID.sql`),
    getByProject: sql(`${PATH}/getByProject.sql`),
    createWBS: sql(`${PATH}/create.sql`),
    deleteWBS: sql(`${PATH}/deleteWBS.sql`),
    editWBSName: sql(`${PATH}/editWBSName.sql`),
    editWBSStatus: sql(`${PATH}/editWBSStatus.sql`),
    editWBSDates: sql(`${PATH}/editWBSDates.sql`),
};

const getWBSByID = async (id: number): Promise<IWBS> => {
    return await dbService.oneOrNone(wbs.getByID, [id]);
};

const getWBS = async (projectID: number): Promise<IWBS[]> => {
    return await dbService.manyOrNone(wbs.getByProject, [projectID]);
};

const getWBSChilds = async (wbs: number): Promise<string[]> => {
    const resLinksActivity = await getActivityIDByWBS(wbs);
    const resLinksWBS = await getWBSChildsByParentID(wbs);

    return [...(resLinksWBS.map(value => `wbs-${value.id_child}`)), ...(resLinksActivity.map(value => `activity-${value}`))];
}

const createWBS = async (data: ICreateWBSReq) => {
    await dbService.none(wbs.createWBS, objectToDataList(data.wbs));
};

const deleteWBS = async (id: number) => {
    await dbService.none(wbs.deleteWBS, [id]);
};

const editWBS = async (data: IEditWBSReq) => {
    await dbService.none(wbs.editWBSName, [data.id, data.name]);

    if (data.oldParent !== Number(data.parent)) {
        if (data.oldParent === -1) {
            await createLinkWBS(data.parent, data.id);
        } else if (Number(data.parent) !== -1) {
            await editLinkWBS(data.oldParent, data.id, data.parent);
        } else {
            await deleteLinkWBS(data.oldParent, data.id);
        }
    }
};

const editWBSDates = async (wbsID: number, startPlanRaw: string, finishPlanRaw: string, startActualRaw: string, finishActualRaw: string) => {
    await dbService.none(wbs.editWBSDates, [wbsID, startPlanRaw, finishPlanRaw, startActualRaw, finishActualRaw]);
};

const editWBSStatus = async (wbsID: number, status: string) => {
    await dbService.none(wbs.editWBSStatus, [wbsID, status]);
};

const reDateWBS = async (wbsID: number) => {
    const linksActivity = await getActivityIDByWBS(wbsID);
    const childLinksWBS = (await getWBSChildsByParentID(wbsID)).map(value => value.id_child);
    const datesStartPlan: Date[] = [];
    const datesFinishPlan: Date[] = [];
    const datesStartActual: Date[] = [];
    const datesFinishActual: Date[] = [];

    for (const id of linksActivity) {
        const activity = await getActivityByID(id);

        datesStartPlan.push(new Date(activity.date_start_plan));
        datesFinishPlan.push(new Date(activity.date_finish_plan));

        if (activity.date_start_actual !== "-Infinity") {
            datesStartActual.push(new Date(activity.date_start_actual));
        }

        if (activity.date_finish_actual !== "+Infinity") {
            datesFinishActual.push(new Date(activity.date_finish_actual));
        }
    }

    for (const id of childLinksWBS) {
        const wbsItem = await getWBSByID(id);

        if (wbsItem.date_start_plan !== "-Infinity") {
            datesStartPlan.push(new Date(wbsItem.date_start_plan));
        }

        if (wbsItem.date_finish_plan !== "+Infinity") {
            datesFinishPlan.push(new Date(wbsItem.date_finish_plan));
        }

        if (wbsItem.date_start_actual !== "-Infinity") {
            datesStartActual.push(new Date(wbsItem.date_start_actual));
        }

        if (wbsItem.date_finish_actual !== "+Infinity") {
            datesFinishActual.push(new Date(wbsItem.date_finish_actual));
        }
    }

    const minStartPlanRaw = Math.min.apply(null, datesStartPlan);
    const maxFinishPlanRaw = Math.max.apply(null, datesFinishPlan);
    const minStartActualRaw = Math.min.apply(null, datesStartActual);
    const maxFinishActualRaw = Math.max.apply(null, datesFinishActual);

    const minStartPlan = isNaN(minStartPlanRaw) ? "-infinity" : new Date(Math.min.apply(null, datesStartPlan)).toISOString();
    const maxFinishPlan = isNaN(maxFinishPlanRaw) ? "+infinity" : new Date(Math.max.apply(null, datesFinishPlan)).toISOString();
    const minStartActual = isNaN(minStartActualRaw) ? "-infinity" : new Date(Math.min.apply(null, datesStartActual)).toISOString();
    const maxFinishActual = isNaN(maxFinishActualRaw) ? "+infinity" : new Date(Math.min.apply(null, datesFinishActual)).toISOString();

    await editWBSDates(wbsID, minStartPlan, maxFinishPlan, minStartActual, maxFinishActual);
    await editWBSStatus(wbsID, minStartActual === "-infinity" ? "Не начата" : maxFinishActual === "+infinity" ? "Выполняется" : "Завершена");

    const parentLinksWBS = await getWBSParentsByChildID(wbsID);

    for (const link of parentLinksWBS) {
        await reDateWBS(link.id_parent);
    }
}


export {
    getWBSByID,
    getWBS,
    getWBSChilds,
    createWBS,
    deleteWBS,
    editWBS,
    editWBSDates,
    editWBSStatus,
    reDateWBS
};
