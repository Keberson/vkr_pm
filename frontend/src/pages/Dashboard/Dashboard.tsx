import React from "react";

import {Logo} from "../../components/Logo/Logo";
import {ProfileIcon} from "../../components/ProfileIcon/ProfileIcon";
import {IProject} from "../../types/IProject";
import {ProjectCard} from "../../components/ProjectCard/ProjectCard";

export const Dashboard = () => {
    const projects: IProject[] = [
        {
            id: 1,
            name: 'Проект №1',
            owner: 'Кузов Максим Юрьевич',
            description: 'Тестовый проект для ВКР',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
        },
        {
            id: 2,
            name: 'Проект №2',
            owner: 'Кузов Максим Юрьевич',
            description: 'Тестовый проект для ВКР №2',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
        },
        {
            id: 3,
            name: 'Проект №3',
            owner: 'Кузов Максим Юрьевич',
            description: 'Тестовый проект для ВКР №3',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
        },
        {
            id: 4,
            name: 'Проект №4',
            owner: 'Кузов Максим Юрьевич',
            description: 'Тестовый проект для ВКР №4',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
        },
        {
            id: 5,
            name: 'Проект №5',
            owner: 'Кузов Максим Юрьевич',
            description: 'Тестовый проект для ВКР №5',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
        },
        {
            id: 6,
            name: 'Проект №6',
            owner: 'Кузов Максим Юрьевич',
            description: 'Тестовый проект для ВКР #6',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
        },
    ];

    return (
        <>
            <header className="grid grid-cols-3 items-center ps-20 pe-20 pt-2.5 pb-2.5">
                <div className="flex flex-col justify-center items-start">
                    <div className="flex flex-col items-center">
                        <Logo />
                        <h1 className="text-text text-lg comfortaa-700">WBS Studio</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <h2 className="text-text text-2xl comfortaa-700">Доступные проекты</h2>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex flex-col items-center cursor-pointer">
                        <ProfileIcon />
                    </div>
                </div>
            </header>
            <div className="grid grid-cols-5 gap-10 ps-10 pe-10 pt-2.5 pb-5 overflow-auto">
                {
                    projects.map(project => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>
        </>
    );
};