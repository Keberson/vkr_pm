import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IWBS} from "../models/IWBS";
import {ILinkWBS} from "../models/ILinkWBS";

const PATH = "../sql/linkWBS";

const linkWBS = {
    getEmptyWBSByProject: sql(`${PATH}/getEmptyWBSByProject.sql`),
    getByParentID: sql(`${PATH}/getByParentID.sql`),
    getByChildID: sql(`${PATH}/getByChildID.sql`),
    createLinkWBS: sql(`${PATH}/createLinkWBS.sql`),
    editLinkWBS: sql(`${PATH}/editLinkWBS.sql`),
    deleteLinkWBS: sql(`${PATH}/deleteLinkWBS.sql`),
};

const getEmptyWBSByProject = async (projectID: number, view: number): Promise<IWBS[]> => {
    return await dbService.manyOrNone(linkWBS.getEmptyWBSByProject, [projectID, view]);
}
const getWBSChildsByParentID = async (parentID: number): Promise<ILinkWBS[]> => {
    return await dbService.manyOrNone(linkWBS.getByParentID, [parentID]);
}

const getWBSParentsByChildID = async (childID: number): Promise<ILinkWBS[]> => {
    return await dbService.manyOrNone(linkWBS.getByChildID, [childID]);
}

const createLinkWBS = async (parent: number, child: number) => {
    await dbService.none(linkWBS.createLinkWBS, [parent, child])
}

const editLinkWBS = async (oldParent: number, child: number, newParent: number) => {
    await dbService.none(linkWBS.editLinkWBS, [oldParent, child, newParent]);
}

const deleteLinkWBS = async (oldParent: number, child: number) => {
    await dbService.none(linkWBS.deleteLinkWBS, [oldParent, child]);
}

export {
    getEmptyWBSByProject,
    getWBSChildsByParentID,
    getWBSParentsByChildID,
    createLinkWBS,
    editLinkWBS,
    deleteLinkWBS
};
