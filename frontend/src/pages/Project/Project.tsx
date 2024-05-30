import React from "react";
import {useParams} from "react-router-dom";
import {DashboardHeader} from "../../components/DashboardHeader/DashboardHeader";
import IActivity from "../../types/ITask";

export const Project = () => {
    const params = useParams();
    const projectId = params.id;
    const projectName = `Проект ${projectId}`;
    const activities: IActivity[] = [];

    return (
        <>
            <DashboardHeader>
                <h2 className="text-text text-2xl comfortaa-700">{projectName}</h2>
            </DashboardHeader>
            <hr className="border-text-secondary"/>
            <div className="mt-5 ps-20 pe-20 grid grid-cols-3 text-text-third">
                <span
                    className="
                    px-5 py-1 w-fit mx-auto
                    rounded-full cursor-pointer
                    bg-block-background-secondary hover:bg-block-background-secondary
                    "
                >
                    Список задач
                </span>
                <span
                    className="
                    px-5 py-1 w-fit mx-auto
                    rounded-full cursor-pointer
                    bg-background-secondary hover:bg-block-background-secondary
                    "
                >
                    Дерево задач
                </span>
                <span
                    className="
                    px-5 py-1 w-fit mx-auto
                    rounded-full cursor-pointer
                    bg-background-secondary hover:bg-block-background-secondary
                    "
                >
                    Дерево срезов
                </span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                    </tr>
                </thead>
            </table>
        </>
    );
};