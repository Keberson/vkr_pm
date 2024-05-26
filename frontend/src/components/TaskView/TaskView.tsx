import ITask from "../../types/ITask";
import React from "react";
import getStatusColor from "../../utils/getStatusColor";

interface TaskViewProps {
    task: ITask
}
export const TaskView: React.FC<TaskViewProps> = ({ task }) => {
    const statusColor = getStatusColor(task.status);

    return (
        <tr>
            <td className="text-center">
                {task.id}
            </td>
            <td className="text-center">
                <h3 className="font-bold">{task.title}</h3>
            </td>
            <td className="text-center">
                -
            </td>
            <td className={`text-center font-medium ${statusColor}`}>
                {task.status}
            </td>
            <td>
                -
            </td>
        </tr>
        // <div className="border pt-3 pb-3 ps-4 pe-4 rounded-xl cursor-pointer bg-white text-black">
        //     <div className="border-b pb-2">
        //
        //     </div>
        //     <div className="pt-4">
        //         <div className={`flex mt-3 font-medium ${statusColor}`}>
        //             <p>Статус: </p>
        //             <p className="ms-auto">{task.status}</p>
        //         </div>
        //     </div>
        // </div>
    );
};
