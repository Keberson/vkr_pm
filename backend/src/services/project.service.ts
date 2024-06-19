import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";
import {ICreatProject, IProjectFront} from "../models/IProject";
import {objectToDataList} from "../utils/objectToDataList.util";
import {getActivitiesByProject, getActivityByID} from "./activity.service";

const PATH = "../sql/project";

const project = {
    getProjects: sql(`${PATH}/getProjects.sql`),
    createProject: sql(`${PATH}/createProject.sql`),
    editProjectDates: sql(`${PATH}/editProjectDates.sql`),
};

const getProjects = async (id: number, id_role: number): Promise<IProjectFront[]> => {
    return dbService.manyOrNone(project.getProjects, [id, id_role]);
};

const createProject = async (data: ICreatProject) => {
    return dbService.none(project.createProject, objectToDataList(data));
};

const editProjectDates = async (id: number, startPlanRaw: string, finishPlanRaw: string, startActualRaw: string, finishActualRaw: string) => {
    return dbService.none(project.editProjectDates, [id, startPlanRaw, finishPlanRaw, startActualRaw, finishActualRaw]);
};

const reDateProject = async (projectID: number) => {
    const linksActivity = (await getActivitiesByProject(projectID)).map(value => value.id);
    const datesStartPlan: Date[] = [];
    const datesFinishPlan: Date[] = [];
    const datesStartActual: Date[] = [];
    const datesFinishActual: Date[] = [];

    for (const id of linksActivity) {
        const activity = await getActivityByID(id);

        datesStartPlan.push(new Date(activity.date_start_plan));
        datesFinishPlan.push(new Date(activity.date_finish_plan));

        if (activity.date_start_actual !== "-Infinity") {
            datesStartActual.push(new Date(activity.date_start_actual));
        }

        if (activity.date_finish_actual !== "+Infinity") {
            datesFinishActual.push(new Date(activity.date_finish_actual));
        }
    }

    const minStartPlanRaw = Math.min.apply(null, datesStartPlan);
    const maxFinishPlanRaw = Math.max.apply(null, datesFinishPlan);
    const minStartActualRaw = Math.min.apply(null, datesStartActual);
    const maxFinishActualRaw = Math.max.apply(null, datesFinishActual);

    const minStartPlan = new Date(minStartPlanRaw).toISOString();
    const maxFinishPlan = new Date(maxFinishPlanRaw).toISOString();
    const minStartActual = isNaN(minStartActualRaw) ? "-infinity" : new Date(minStartActualRaw).toISOString();
    const maxFinishActual = isNaN(maxFinishActualRaw) ? "+infinity" : new Date(maxFinishActualRaw).toISOString();

    await editProjectDates(projectID, minStartPlan, maxFinishPlan, minStartActual, maxFinishActual);
};

export {
    getProjects, createProject, editProjectDates, reDateProject
};
