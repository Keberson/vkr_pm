import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {ICreateWBS} from "../models/IWBS";
import {IActivity} from "../models/IActivity";

const wbs = {
    getByProject: sql('../sql/wbs/getByProject.sql'),
    createWBS: sql('../sql/wbs/create.sql'),
};

const getWBS = async (projectID: number) => {
    return await dbService.manyOrNone(wbs.getByProject, [projectID]);
}

const createWBS = async (data: ICreateWBS) => {
    const dataList = [];
    const dataJSON = JSON.parse(JSON.stringify(data));

    for (const key in dataJSON) {
        dataList.push(dataJSON[key]);
    }

    await dbService.none(wbs.createWBS, dataList);
};

export {
    getWBS,
    createWBS
};
