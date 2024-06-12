import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {ICreateWBS} from "../models/IWBS";

const wbs = {
    createWBS: sql('../sql/wbs/create.sql'),
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
    createWBS
};
