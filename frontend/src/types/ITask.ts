export default interface IActivity {
    id: number,
    name: string,
    description: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    others: JSON,
    status: "Не начато" | "Выполняется" | "Завершена",
    project_id: number
}
