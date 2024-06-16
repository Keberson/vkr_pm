interface IProject extends ICreatProject {
    id: number,
}

interface ICreatProject {
    name: string,
    owner: number,
    description: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
}

interface IProjectFront {
    id: number,
    name: string,
    owner: string,
    description: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
}

export {
    IProject, IProjectFront, ICreatProject
}
