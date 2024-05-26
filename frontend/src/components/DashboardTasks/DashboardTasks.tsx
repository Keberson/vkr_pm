import React from "react";
import ITask from "../../types/ITask";
import {TaskView} from "../TaskView/TaskView";
import Plus from "../../assets/plus";
import {useAppSelector} from "../../hooks/useAppSelector";

export const DashboardTasks = () => {
    const tasks: ITask[] = useAppSelector(state => state.project.tasks);

    return (
        <div className="border-r xl:h-[inherit]">
            <div className="flex gap-5 items-center">
                <h2 className="text-xl font-bold">Задачи</h2>
                <button className="w-fit h-fit border-gray-300 border rounded-3xl">
                    <Plus height="20px" width="20px" />
                </button>
            </div>
            <table className="table-fixed w-full mt-5 pt-5 pb-5 pe-5 gap-4 overflow-auto tasks-scroll border-spacing-2 border">
                <thead className="border-b-2">
                    <tr>
                        <th>ID</th>
                        <th>Заголовок</th>
                        <th>Исполнитель</th>
                        <th>Статус</th>
                        <th>Теги</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <TaskView task={task} key={task.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
