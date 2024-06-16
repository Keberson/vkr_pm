import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IActivityDependency} from "../models/IActivityDependency";

const PATH = "../sql/activityDependency";

const activityDependency = {
    getByParentID: sql(`${PATH}/getByParentID.sql`),
    getEmptyActivityByProject: sql(`${PATH}/getEmptyActivityByProject.sql`)
};

const getActivityDependencyByParentID = async (parentID: number): Promise<IActivityDependency[]> => {
    return await dbService.manyOrNone(activityDependency.getByParentID, [parentID]);
}

export {
    getActivityDependencyByParentID
};
