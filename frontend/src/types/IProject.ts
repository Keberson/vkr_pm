interface IProject extends ICreateProject {
    id: number,
    owner: string
}

interface ICreateProject {
    name: string,
    description: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
}

export type {
    IProject,
    ICreateProject
};
