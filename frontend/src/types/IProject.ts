interface IProject {
    id: number,
    name: string,
    owner: number,
    description: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
}

export type {
    IProject
};
