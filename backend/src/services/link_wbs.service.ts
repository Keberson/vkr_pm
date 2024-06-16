import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IWBS} from "../models/IWBS";
import {ILinkWBS} from "../models/ILinkWBS";

const PATH = "../sql/linkWBS";

const linkWBS = {
    getEmptyWBSByProject: sql(`${PATH}/getEmptyWBSByProject.sql`),
    getByParentID: sql(`${PATH}/getByParentID.sql`),
    createLinkWBS: sql(`${PATH}/createLinkWBS.sql`),
};

const getEmptyWBSByProject = async (projectID: number, view: number): Promise<IWBS[]> => {
    return await dbService.manyOrNone(linkWBS.getEmptyWBSByProject, [projectID, view]);
}
const getWBSChildsByParentID = async (parentID: number): Promise<ILinkWBS[]> => {
    return await dbService.manyOrNone(linkWBS.getByParentID, [parentID]);
}

const createLinkWBS = async (parent: number, child: number) => {
    await dbService.none(linkWBS.createLinkWBS, [parent, child])
}

export {
    getEmptyWBSByProject,
    getWBSChildsByParentID,
    createLinkWBS
};
