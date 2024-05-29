import React from "react";

import getFormatDate from "../../utils/getFormatDate";
import {ProjectIcon} from "../ProjectIcon/ProjectIcon";
import {IProject} from "../../types/IProject";

interface ProjectCardProps {
    project: IProject
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="rounded ps-5 pe-5 pt-3 pb-3 flex flex-col gap-3 cursor-pointer
                        bg-block-background-secondary hover:bg-block-background
                        text-text hover:text-text-hover"
             key={project.id}
        >
            <div className="flex items-center justify-between">
                <span className="text-inherit hover:text- text-sm">{project.name}</span>
                <ProjectIcon />
            </div>
            <span className="text-inherit text-sm">{project.description}</span>
            <div className="flex flex-col text-inherit text-sm">
                <span>План:</span>
                <span>{getFormatDate(project.date_start_plan)} - {getFormatDate(project.date_finish_plan)}</span>
            </div>
            <div className="flex flex-col text-inherit text-sm">
                <span>Факт:</span>
                <span>{getFormatDate(project.date_start_actual)} - {getFormatDate(project.date_finish_actual)}</span>
            </div>
            <span className="text-inherit text-xs">Владелец: {project.owner}</span>
        </div>
    );
};