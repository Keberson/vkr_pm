import React from "react";
import IActivity from "../../../types/ITask";
import getFormatDate from "../../../utils/getFormatDate";

interface TableTaskRowProps {
    activity: IActivity
}

export const TableTaskRow: React.FC<TableTaskRowProps> = ({ activity }) => {
    const statusColor = activity.status === "Не начато" ? "bg-red" : activity.status === "Выполняется" ? "bg-blue" : "bg-green";

    return (
        <tr key={activity.id}>
            <th scope="row" className="text-center">{activity.id}</th>
            <td className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis">{activity.name}</td>
            <td className="text-center">{getFormatDate(activity.date_start_plan)}</td>
            <td className="text-center">{getFormatDate(activity.date_finish_plan)}</td>
            <td className="text-center">{getFormatDate(activity.date_start_actual)}</td>
            <td className="text-center">{getFormatDate(activity.date_finish_actual)}</td>
            <td className="">
                <div className="flex items-center justify-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${statusColor}`}/>
                    <span>{activity.status}</span>
                </div>
            </td>
        </tr>
    );
};