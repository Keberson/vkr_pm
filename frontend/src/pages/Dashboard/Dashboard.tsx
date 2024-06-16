import React, {useEffect} from "react";

import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useGetProjectsQuery} from "../../services/APIService";

import {setLoader} from "../../store/slices/LoaderSlice";

import {ProjectCard} from "../../components/Dashboard/ProjectCard/ProjectCard";
import {DashboardHeader} from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import {useAppSelector} from "../../hooks/useAppSelector";


export const Dashboard = () => {
    const dispatch = useAppDispatch();
    const {isLoading} = useGetProjectsQuery();
    const projects = useAppSelector(state => state.project.projects);

    useEffect(() => {
        dispatch(setLoader({show: isLoading, from: "Dashboard"}));
    }, [dispatch, isLoading]);

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