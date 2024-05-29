interface IProject {
    id: number,
    name: string,
    owner: string,
    description: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
}

const EmptyProject: IProject = {
    id: 1,
    name: '',
    owner: '',
    description: '',
    date_start_plan: new Date(),
    date_finish_plan: new Date(),
    date_start_actual: new Date(),
    date_finish_actual: new Date(),
}

export type {
    IProject
};

export {
    EmptyProject
};
