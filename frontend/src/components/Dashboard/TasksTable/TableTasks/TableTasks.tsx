import React from "react";
import { IActivity } from "../../../../types/IActivity";
import {TableTaskRow} from "../TableTaskRow/TableTaskRow";
import {TableTasksHeader} from "../TableTasksHeader/TableTasksHeader";
import {IWBS} from "../../../../types/IWBS";

export const TableTasks = () => {
    const activities: IActivity[] = [
        {
            id: 1,
            name: 'НИРС',
            description: 'Написать НИРС',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
            status: "Завершена",
            project_id: 1
        },
        {
            id: 2,
            name: 'Выполнение преддипломной практики',
            description: 'Написать НИРС',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
            status: "Завершена",
            project_id: 1
        },
        {
            id: 3,
            name: 'Выполнение преддипломной практикииииииииииииииииииииииииииииии',
            description: 'Написать НИРС',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
            status: "Завершена",
            project_id: 1
        },
    ];
    const wbses: IWBS[] = [{
        id: 1,
        name: 'WBS #1',
        date_start_plan: new Date(2024, 10, 20),
        date_finish_plan: new Date(2024, 10, 20),
        date_start_actual: new Date(2024, 10, 20),
        date_finish_actual: new Date(2024, 10, 20),
        status: 'Завершена',
        project_id: 1,
    }];

    return (
        <table className="w-full table-fixed border-spacing-x-1">
            <TableTasksHeader />
            <tbody>
            {
                wbses.map(wbs => (
                    <TableTaskRow item={wbs} itemType="IWBS" />
                ))
            }
            {
                activities.map(activity => (
                    <TableTaskRow item={activity} itemType="IActivity" />
                ))
            }
            </tbody>
        </table>
    );
};