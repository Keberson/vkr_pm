interface IWBS extends ICreateWBS{
    id: number,
}
interface ICreateWBS {
    id: number,
    name: string,
    date_start_plan: Date,
    date_start_finish: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: 'Не начата' | 'Выполняется' | 'Завершено',
    project_id: number,
    id_view: number
}

export {
    IWBS, ICreateWBS
};
