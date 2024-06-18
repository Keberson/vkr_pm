import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IWBS} from "../models/IWBS";
import {objectToDataList} from "../utils/objectToDataList.util";
import {ICreateWBSReq, IEditWBSReq} from "../models/Requests";
import {getActivityIDByWBS} from "./link_activity_wbs.service";
import {createLinkWBS, deleteLinkWBS, editLinkWBS, getWBSChildsByParentID, getWBSParentsByChildID} from "./link_wbs.service";

const PATH = "../sql/wbs"

const wbs = {
    getByID: sql(`${PATH}/getByID.sql`),
    getByProject: sql(`${PATH}/getByProject.sql`),
    createWBS: sql(`${PATH}/create.sql`),
    deleteWBS: sql(`${PATH}/deleteWBS.sql`),
    editWBSName: sql(`${PATH}/editWBSName.sql`),
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

const reDateWBS = async (wbs: number) => {
    const linksActivity = await getActivityIDByWBS(wbs);
    const linksWBS = await getWBSParentsByChildID(wbs);


}


export {
    getWBSByID,
    getWBS,
    getWBSChilds,
    createWBS,
    deleteWBS,
    editWBS
};
