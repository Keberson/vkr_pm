interface IWBS extends ICreateWBS{
    id: number,
    date_start_plan: Date,
    date_start_finish: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: 'Не начата' | 'Выполняется' | 'Завершено',
}
interface ICreateWBS {
    name: string,
    project_id: number,
    id_view: number
}

export {
    IWBS, ICreateWBS
};
