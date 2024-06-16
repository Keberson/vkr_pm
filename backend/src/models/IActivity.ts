interface IActivity extends ICreateActivity {
    id: number,
    status: 'Не начата' | 'Выполняется' | 'Завершена',
}

interface ICreateActivity {
    name: string,
    description: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
    project_id: number
}

export {
    IActivity, ICreateActivity
};