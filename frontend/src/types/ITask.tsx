interface ITask {
    id: number,
    title: string,
    description?: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
    others?: string,
    status: "Не начато" | "Выполняется" | "Выполнено"
}

export default ITask;