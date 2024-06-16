import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {ICreatProject, IProjectFront} from "../models/IProject";
import {objectToDataList} from "../utils/objectToDataList.util";

const PATH = "../sql/project";

const project = {
    getProjects: sql(`${PATH}/getProjects.sql`),
    createProject: sql(`${PATH}/createProject.sql`),
};

const getProjects = async (id: number, id_role: number): Promise<IProjectFront[]> => {
    return dbService.manyOrNone(project.getProjects, [id, id_role]);
};

const createProject = async (data: ICreatProject) => {
    return dbService.none(project.createProject, objectToDataList(data));
}

export {
    getProjects, createProject
};
