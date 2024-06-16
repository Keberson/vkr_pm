interface IActivity extends ICreateActivity {
    id: number,
}

interface ICreateActivity {
    name: string,
    description: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: 'Не начата' | 'Выполняется' | 'Завершена',
    project_id: number
}

export {
    IActivity, ICreateActivity
};