import React, {useEffect} from "react";

import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useGetProjectsQuery} from "../../services/APIService";

import {setLoader} from "../../store/slices/LoaderSlice";

import {ProjectCard} from "../../components/Dashboard/Projects/ProjectCard/ProjectCard";
import {Header} from "../../components/Dashboard/Projects/Header/Header";
import {ModalWrapper} from "../../components/ModalWrapper/ModalWrapper";
import {CreateProject} from "../../components/Dashboard/Projects/CreateProject/CreateProject";


export const Dashboard = () => {
    const dispatch = useAppDispatch();
    const {isLoading} = useGetProjectsQuery();
    const projects = useAppSelector(state => state.project.projects);
    const showModal = useAppSelector(state => state.modalProject.show)

    useEffect(() => {
        dispatch(setLoader({show: isLoading, from: "Dashboard"}));
    }, [dispatch, isLoading]);

    return (
        <>
            {
                showModal &&
                <ModalWrapper>
                    <CreateProject />
                </ModalWrapper>
            }
            <Header searchVisible={true}>
                <h2 className="text-text text-xl comfortaa-700">Доступные проекты</h2>
            </Header>
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