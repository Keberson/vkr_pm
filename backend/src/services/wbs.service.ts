import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {ICreateWBS, IWBS} from "../models/IWBS";
import {IActivity} from "../models/IActivity";
import {objectToDataList} from "../utils/objectToDataList.util";
import {ICreateWBSReq} from "../models/Requests";
import {isInstanceOfIActivity} from "../utils/isInstanceOfIActivity.util";
import {createLinkActivityWBS, getActivityIDByWBS, getCountWBSLinks, getWBSbyActivity} from "./link_activity_wbs.service";
import {createLinkWBS, getWBSChildsByParentID} from "./link_wbs.service";
import db from "../configs/db.config";

const PATH = "../sql/wbs"

const wbs = {
    getByID: sql(`${PATH}/getByID.sql`),
    getByProject: sql(`${PATH}/getByProject.sql`),
    createWBS: sql(`${PATH}/create.sql`),
    deleteWBS: sql(`${PATH}/deleteWBS.sql`)
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

export {
    getWBSByID,
    getWBS,
    getWBSChilds,
    createWBS,
    deleteWBS
};
