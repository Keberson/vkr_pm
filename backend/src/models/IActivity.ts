interface IActivity {
    id: number,
    name: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: 'Не начата' | 'Выполняется' | 'Завершена',
    others: JSON
}

export {
    IActivity
};