import React from "react";
import ITask from "../../types/ITask";
import {TaskView} from "../TaskView/TaskView";
import Plus from "../../assets/plus";

export const DashboardTasks = () => {
    const tasks: ITask[] = [
        {
            id: 1,
            title: "Задача 1",
            description: "Описание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша рекламаОписание задачи №1, тут могла бы быть ваша реклама",
            date_start_plan: "2024-01-21",
            date_finish_plan: "2024-01-21",
            date_start_actual: "2024-01-21",
            date_finish_actual: "2024-01-21",
            others: "{}",
            status: "Не начато"
        },{
            id: 2,
            title: "Задача 2",
            description: "Описание задачи №2, тут могла бы быть ваша реклама",
            date_start_plan: "2024-01-21",
            date_finish_plan: "2024-01-21",
            date_start_actual: "2024-01-21",
            date_finish_actual: "2024-01-21",
            others: "{}",
            status: "Не начато"
        },{
            id: 3,
            title: "Задача 3",
            description: "Описание задачи №3, тут могла бы быть ваша реклама",
            date_start_plan: "2024-01-21",
            date_finish_plan: "2024-01-21",
            date_start_actual: "2024-01-21",
            date_finish_actual: "2024-01-21",
            others: "{}",
            status: "Не начато"
        },{
            id: 3,
            title: "Задача 3",
            description: "Описание задачи №3, тут могла бы быть ваша реклама",
            date_start_plan: "2024-01-21",
            date_finish_plan: "2024-01-21",
            date_start_actual: "2024-01-21",
            date_finish_actual: "2024-01-21",
            others: "{}",
            status: "Не начато"
        },{
            id: 3,
            title: "Задача 3",
            description: "Описание задачи №3, тут могла бы быть ваша реклама",
            date_start_plan: "2024-01-21",
            date_finish_plan: "2024-01-21",
            date_start_actual: "2024-01-21",
            date_finish_actual: "2024-01-21",
            others: "{}",
            status: "Не начато"
        },{
            id: 3,
            title: "Задача 3",
            description: "Описание задачи №3, тут могла бы быть ваша реклама",
            date_start_plan: "2024-01-21",
            date_finish_plan: "2024-01-21",
            date_start_actual: "2024-01-21",
            date_finish_actual: "2024-01-21",
            others: "{}",
            status: "Не начато"
        },{
            id: 3,
            title: "Задача 3",
            description: "Описание задачи №3, тут могла бы быть ваша реклама",
            date_start_plan: "2024-01-21",
            date_finish_plan: "2024-01-21",
            date_start_actual: "2024-01-21",
            date_finish_actual: "2024-01-21",
            others: "{}",
            status: "Не начато"
        },{
            id: 3,
            title: "Задача 3",
            description: "Описание задачи №3, тут могла бы быть ваша реклама",
            date_start_plan: "2024-01-21",
            date_finish_plan: "2024-01-21",
            date_start_actual: "2024-01-21",
            date_finish_actual: "2024-01-21",
            others: "{}",
            status: "Не начато"
        },{
            id: 3,
            title: "Задача 3",
            description: "Описание задачи №3, тут могла бы быть ваша реклама",
            date_start_plan: "2024-01-21",
            date_finish_plan: "2024-01-21",
            date_start_actual: "2024-01-21",
            date_finish_actual: "2024-01-21",
            others: "{}",
            status: "Не начато"
        },
    ]

    return (
        <div className="border-r">
            <div className="flex gap-5 items-center">
                <h2 className="text-xl font-bold">Задачи</h2>
                <button className="w-fit h-fit border-gray-300 border rounded-3xl">
                    <Plus height="20px" width="20px" />
                </button>
            </div>
            <div className="mt-5 grid grid-cols-3 pt-5 pb-5 pe-5 gap-4 overflow-auto tasks-scroll" style={{ height: "80vh"}}>
                {
                    tasks.map(task => (
                        <TaskView task={task} key={task.id} />
                    ))
                }
            </div>
        </div>
    );
};
