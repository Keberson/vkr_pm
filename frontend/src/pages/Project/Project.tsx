import React from "react";
import {useParams} from "react-router-dom";
import {DashboardHeader} from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import {TableTasks} from "../../components/TasksTable/TableTasks/TableTasks";
import {ProjectMenu} from "../../components/Dashboard/ProjectMenu/ProjectMenu";

export const Project = () => {
    const params = useParams();
    const projectId = params.id;
    const projectName = `Проект ${projectId}`;

    return (
        <>
            <DashboardHeader>
                <h2 className="text-text text-2xl comfortaa-700">{projectName}</h2>
            </DashboardHeader>
            <hr className="border-text-secondary"/>
            <div className="mt-5 ps-20 pe-20 grid grid-cols-3 text-text-third">
                <ProjectMenu />
            </div>
            <div className="ps-10 pe-10 pt-2.5 pb-5 overflow-auto text-text">
                <TableTasks />
            </div>
        </>
    );
};