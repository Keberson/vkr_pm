import React from "react";
import { IActivity } from "../../../types/ITask";
import getFormatDate from "../../../utils/getFormatDate";
import {IWBS} from "../../../types/IWBS";
import {ActivityIcon} from "../../Dashboard/ActivityIcon/ActivityIcon";
import {WBSIcon} from "../../Dashboard/WBSIcon/WBSIcon";

interface TableTaskRowProps {
    item: IActivity | IWBS,
    itemType: "IActivity" | "IWBS"
}

export const TableTaskRow: React.FC<TableTaskRowProps> = ({ item, itemType }) => {
    const statusColor = item.status === "Не начато" ? "bg-red" : item.status === "Выполняется" ? "bg-blue" : "bg-green";

    return (
        <tr key={item.id}>
            <th scope="row" className="text-center">{item.id}</th>
            <td>
                {
                    itemType === "IActivity"
                        ?
                        <ActivityIcon size={20} />
                        :
                        <WBSIcon size={20} />
                }
            </td>
            <td className="whitespace-nowrap overflow-hidden overflow-ellipsis">{item.name}</td>
            <td className="text-center">{getFormatDate(item.date_start_plan)}</td>
            <td className="text-center">{getFormatDate(item.date_finish_plan)}</td>
            <td className="text-center">{getFormatDate(item.date_start_actual)}</td>
            <td className="text-center">{getFormatDate(item.date_finish_actual)}</td>
            <td className="">
                <div className="flex items-center justify-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${statusColor}`}/>
                    <span>{item.status}</span>
                </div>
            </td>
        </tr>
    );
};