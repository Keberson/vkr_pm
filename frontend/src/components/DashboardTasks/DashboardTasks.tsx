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
            <div className="mt-5 grid xl:grid-cols-2 2xl:grid-cols-3 pt-5 pb-5 pe-5 gap-4 overflow-auto tasks-scroll xl:h-[inherit]">
                {
                    tasks.map(task => (
                        <TaskView task={task} key={task.id} />
                    ))
                }
            </div>
        </div>
    );
};
