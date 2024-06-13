interface IProject {
    id: number,
    name: string,
    owner: string,
    description: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
}

const EmptyProject: IProject = {
    id: 1,
    name: '',
    owner: '',
    description: '',
    date_start_plan: '',
    date_finish_plan: '',
    date_start_actual: '',
    date_finish_actual: '',
}

export type {
    IProject
};

export {
    EmptyProject
};
