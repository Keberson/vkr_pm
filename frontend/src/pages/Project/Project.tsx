import React from "react";
import {DashboardHeader} from "../../components/DashboardHeader/DashboardHeader";
import {DashboardBody} from "../../components/DashboardBody/DashboardBody";
import {ModalWrapper} from "../../components/ModalWrapper/ModalWrapper";

export const Project = () => {
    const projectName = "Проект 1";

    return (
        <ModalWrapper>
            <div className="ps-20 pe-20 pt-5 pb-5 h-full bg-gray-50">
                <DashboardHeader projectName={projectName} />
                <DashboardBody />
            </div>
        </ModalWrapper>
    );
};