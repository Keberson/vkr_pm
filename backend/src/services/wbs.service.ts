import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {ICreateWBS, IWBS} from "../models/IWBS";
import {IActivity} from "../models/IActivity";
import {objectToDataList} from "../utils/objectToDataList.util";

const PATH = "../sql/wbs"

const wbs = {
    getByID: sql(`${PATH}/getByID.sql`),
    getByProject: sql(`${PATH}/getByProject.sql`),
    createWBS: sql(`${PATH}/create.sql`),
};

const getWBSByID = async (id: number): Promise<IWBS> => {
    return await dbService.oneOrNone(wbs.getByID, [id]);
};

const getWBS = async (projectID: number): Promise<IWBS[]> => {
    return await dbService.manyOrNone(wbs.getByProject, [projectID]);
};

const createWBS = async (data: ICreateWBS) => {
    await dbService.none(wbs.createWBS, objectToDataList(data));
};

export {
    getWBSByID,
    getWBS,
    createWBS
};
