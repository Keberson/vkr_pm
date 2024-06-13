import React from "react";

import {IProject} from "../../types/IProject";
import {ProjectCard} from "../../components/Dashboard/ProjectCard/ProjectCard";
import {DashboardHeader} from "../../components/Dashboard/DashboardHeader/DashboardHeader";

export const Dashboard = () => {
    const projects: IProject[] = [
        {
            id: 1,
            name: 'Проект №1',
            owner: 'Кузов Максим Юрьевич',
            description: 'Тестовый проект для ВКР',
            date_start_plan: "2024-10-20",
            date_finish_plan: "2024-10-20",
            date_start_actual: "2024-10-20",
            date_finish_actual: "2024-10-20",
        },
        {
            id: 2,
            name: 'Проект №2',
            owner: 'Кузов Максим Юрьевич',
            description: 'Тестовый проект для ВКР №2',
            date_start_plan: "2024-10-20",
            date_finish_plan: "2024-10-20",
            date_start_actual: "2024-10-20",
            date_finish_actual: "2024-10-20",
        },
        {
            id: 3,
            name: 'Проект №3',
            owner: 'Кузов Максим Юрьевич',
            description: 'Тестовый проект для ВКР №3',
            date_start_plan: "2024-10-20",
            date_finish_plan: "2024-10-20",
            date_start_actual: "2024-10-20",
            date_finish_actual: "2024-10-20",
        },
    ];

    return (
        <>
            <DashboardHeader searchVisible={true}>
                <h2 className="text-text text-2xl comfortaa-700">Доступные проекты</h2>
            </DashboardHeader>
            <div className="h-full grid lg:grid-cols-5 md:grid-cols-3 gap-10 ps-10 pe-10 pt-5 pb-5 overflow-auto">
                {
                    projects.map(project => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>
        </>
    );
};