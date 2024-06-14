import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IWBS} from "../models/IWBS";
import {ILinkWBS} from "../models/ILinkWBS";

const PATH = "../sql/wbsDependency";

const linkWBS = {
    getEmptyWBSByProject: sql(`${PATH}/getEmptyWBSByProject.sql`),
    getByParentID: sql(`${PATH}/getByParentID.sql`)
};

const getEmptyWBSByProject = async (projectID: number): Promise<IWBS[]> => {
    return await dbService.manyOrNone(linkWBS.getEmptyWBSByProject, [projectID]);
}
const getWBSChildsByParentID = async (parentID: number): Promise<ILinkWBS[]> => {
    return await dbService.manyOrNone(linkWBS.getByParentID, [parentID]);
}

export {
    getEmptyWBSByProject,
    getWBSChildsByParentID,
};
