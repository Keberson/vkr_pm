import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {ICreateView, IView} from "../models/IView";
import {objectToDataList} from "../utils/objectToDataList.util";

const PATH = "../sql/view";

const view = {
    getByProject: sql(`${PATH}/getByProject.sql`),
    createView: sql(`${PATH}/createView.sql`)
};

const getViewByProject = async (project: number): Promise<IView[]> => {
    return await dbService.manyOrNone(view.getByProject, [project]);
}

const createView = async (data: ICreateView): Promise<IView[]> => {
    return await dbService.manyOrNone(view.createView, objectToDataList(data));
}

export {
    getViewByProject,
    createView
};
