import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IWbsDependency} from "../models/IWbsDependency";

const PATH = "../sql/wbsDependency";

const wbsDependency = {
    getByParentID: sql(`${PATH}/getByParentID.sql`)
};

const getWBSDependencyByParentID = async (parentID: number): Promise<IWbsDependency[]> => {
    return await dbService.manyOrNone(wbsDependency.getByParentID, [parentID]);
}

export {
    getWBSDependencyByParentID,
};
