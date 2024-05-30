import React from "react";
import IActivity from "../../../types/ITask";
import {TableTaskRow} from "../TableTaskRow/TableTaskRow";
import {TableTasksHeader} from "../TableTasksHeader/TableTasksHeader";

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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
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
            others: JSON.parse('{}'),
            status: "Завершено",
            project_id: 1
        },
    ];

    return (
        <table className="w-full table-fixed border-spacing-x-1 border-spacing-y-2">
            <TableTasksHeader />
            <tbody>
            {
                activities.map(activity => (
                    <TableTaskRow activity={activity} />
                ))
            }
            </tbody>
        </table>
    );
};