import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {ICreateWBS, IWBS} from "../models/IWBS";
import {IActivity} from "../models/IActivity";

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
    const dataList = [];
    const dataJSON = JSON.parse(JSON.stringify(data));

    for (const key in dataJSON) {
        dataList.push(dataJSON[key]);
    }

    await dbService.none(wbs.createWBS, dataList);
};

export {
    getWBSByID,
    getWBS,
    createWBS
};
