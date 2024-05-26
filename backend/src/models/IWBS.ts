interface IWbs {
    id: number,
    name: string,
    date_start_plan: Date,
    date_start_finish: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: 'Не начата' | 'Выполняется' | 'Завершена',
}

export {
    IWbs
};
