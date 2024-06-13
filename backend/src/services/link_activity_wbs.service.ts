import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IActivity} from "../models/IActivity";

const PATH = "../sql/linkActivityWbs"

const linkActivityWBS = {
    getEmptyActivityByProject: sql(`${PATH}/getEmptyActivityByProject.sql`),
    getActivityIDByWBS: sql(`${PATH}/getActivityIDByWBS.sql`),
};

const getEmptyActivityByProject = async (projectID: number): Promise<IActivity[]> => {
    return await dbService.manyOrNone(linkActivityWBS.getEmptyActivityByProject, [projectID]);
}

const getActivityIDByWBS = async (wbsID: number): Promise<number[]> => {
    const response: {id_activity: number}[] = await dbService.manyOrNone(linkActivityWBS.getActivityIDByWBS, [wbsID]);

    return response.map((value) => value.id_activity);
}

export {
    getEmptyActivityByProject,
    getActivityIDByWBS
};
