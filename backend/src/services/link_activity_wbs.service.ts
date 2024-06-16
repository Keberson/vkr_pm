import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IActivity} from "../models/IActivity";

const PATH = "../sql/linkActivityWbs"

const linkActivityWBS = {
    getEmptyActivityByProject: sql(`${PATH}/getEmptyActivityByProject.sql`),
    getActivityIDByWBS: sql(`${PATH}/getActivityIDByWBS.sql`),
    getWBSbyActivity: sql(`${PATH}/getWBSbyActivity.sql`),
    getCountWBSLinks: sql(`${PATH}/getCountWBSLinks.sql`),
    createLinkActivityWBS: sql(`${PATH}/createLinkActivityWBS.sql`),
    editLinkActivityWBS: sql(`${PATH}/editLinkActivityWBS.sql`),
    deleteLinkActivityWBS: sql(`${PATH}/deleteLinkActivityWBS.sql`),
};

const getEmptyActivityByProject = async (projectID: number, view: number): Promise<IActivity[]> => {
    return await dbService.manyOrNone(linkActivityWBS.getEmptyActivityByProject, [projectID, view]);
}

const getActivityIDByWBS = async (wbsID: number): Promise<number[]> => {
    const response: {id_activity: number}[] = await dbService.manyOrNone(linkActivityWBS.getActivityIDByWBS, [wbsID]);

    return response.map((value) => value.id_activity);
}

const getWBSbyActivity = async (activity: number): Promise<number | null> => {
    return await dbService.oneOrNone(linkActivityWBS.getWBSbyActivity, [activity])
}

const getCountWBSLinks = async (wbs: number): Promise<number> => {
    return await dbService.one(linkActivityWBS.getCountWBSLinks, [wbs]);
}

const createLinkActivityWBS = async (activity: number, wbs: number) => {
    return await dbService.none(linkActivityWBS.createLinkActivityWBS, [activity, wbs]);
}

const editLinkActivityWBS = async (activity: number, wbs: number, newWBS: number) => {
    await dbService.none(linkActivityWBS.editLinkActivityWBS, [activity, wbs, newWBS]);
}

const deleteLinkActivityWBS = async (activity: number, wbs: number) => {
    return await dbService.none(linkActivityWBS.deleteLinkActivityWBS, [activity, wbs])
}

export {
    getEmptyActivityByProject,
    getActivityIDByWBS,
    getWBSbyActivity,
    getCountWBSLinks,
    createLinkActivityWBS,
    editLinkActivityWBS,
    deleteLinkActivityWBS
};
