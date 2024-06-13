import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IWbsDependency} from "../models/IWbsDependency";
import {IWBS} from "../models/IWBS";

const PATH = "../sql/wbsDependency";

const wbsDependency = {
    getEmptyWBSByProject: sql(`${PATH}/getEmptyWBSByProject.sql`),
    getByParentID: sql(`${PATH}/getByParentID.sql`)
};

const getEmptyWBSByProject = async (projectID: number): Promise<IWBS[]> => {
    return await dbService.manyOrNone(wbsDependency.getEmptyWBSByProject, [projectID]);
}
const getWBSDependencyByParentID = async (parentID: number): Promise<IWbsDependency[]> => {
    return await dbService.manyOrNone(wbsDependency.getByParentID, [parentID]);
}

export {
    getEmptyWBSByProject,
    getWBSDependencyByParentID,
};
