import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IView} from "../models/IView";

const PATH = "../sql/view";

const view = {
    getByProject: sql(`${PATH}/getByProject.sql`)
};

const getViewByProject = async (project: number): Promise<IView[]> => {
    return await dbService.manyOrNone(view.getByProject, [project]);
}

export {
    getViewByProject
};
