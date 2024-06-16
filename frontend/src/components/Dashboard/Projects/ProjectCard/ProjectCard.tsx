import React from "react";

import getFormatDate from "../../../../utils/getFormatDate";
import {ProjectIcon} from "../../../../assets/ProjectIcon";
import {IProject} from "../../../../types/IProject";
import {Link} from "react-router-dom";

interface ProjectCardProps {
    project: IProject
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link to={`${project.id}`} className="h-[300px]">
            <div
                className="
                    h-[300px]
                    rounded-lg cursor-pointer
                    ps-5 pe-5 pt-3 pb-3
                    grid grid-rows-[30px_1fr_50px_50px]
                    gap-2
                    bg-block-background-secondary hover:bg-block-background
                    text-text hover:text-text-hover"
                key={project.id}
            >
                <div className="flex items-center justify-between">
                    <span className="text-inherit hover:text- text-sm">{project.name}</span>
                    <ProjectIcon size={20} />
                </div>
                <span className="text-inherit text-xs overflow-auto h-full border rounded-lg ps-2 pe-2 pt-1 pb-1">
                    {project.description}
                </span>
                <div className="flex flex-col text-inherit text-sm">
                    <span>План:</span>
                    {project.date_start_plan && project.date_finish_plan && <span>{getFormatDate(project.date_start_plan)} - {getFormatDate(project.date_finish_plan)}</span>}
                </div>
                <div className="flex flex-col text-inherit text-sm">
                    <span>Факт:</span>
                    {project.date_start_actual && project.date_finish_actual && <span>{getFormatDate(project.date_start_actual)} - {getFormatDate(project.date_finish_actual)}</span>}
                </div>
            </div>
        </Link>

    );
};