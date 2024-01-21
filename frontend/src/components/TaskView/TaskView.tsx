import ITask from "../../types/ITask";
import React from "react";
import getStatusColor from "../../utils/getStatusColor";

interface TaskViewProps {
    task: ITask
}
export const TaskView: React.FC<TaskViewProps> = ({ task }) => {
    const statusColor = getStatusColor(task.status);

    return (
        <div className="h-80 border pt-3 pb-3 ps-4 pe-4 rounded-xl cursor-pointer bg-white">
            <div className="border-b pb-2">
                <h3 className="font-bold">{task.title}</h3>
            </div>
            <div className="pt-4">
                <p className="h-52 overflow-auto task-scroll text-gray-500">
                    {task.description}
                </p>
                <div className={`flex mt-3 font-medium ${statusColor}`}>
                    <p>Статус: </p>
                    <p className="ms-auto">{task.status}</p>
                </div>
            </div>
        </div>
    );
};
