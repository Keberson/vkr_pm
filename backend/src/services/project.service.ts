import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {IProject} from "../models/IProject";

const PATH = "../sql/project";

const project = {
    getProjects: sql(`${PATH}/getProjects.sql`),
};

const getProjects = async (id: number, id_role: number): Promise<IProject[]> => {
    return dbService.manyOrNone(project.getProjects, [id, id_role]);
};


export {
    getProjects
};
