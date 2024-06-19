interface IWBS extends ICreateWBS{
    id: number,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
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
