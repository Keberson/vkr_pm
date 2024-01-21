import React from "react";

interface DashboardHeaderProps {
    projectName: string
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ projectName }) => {
    return (
        <header className="border-b-2 pb-4">
            <h1 className="text-2xl font-bold">Управление проектом «{projectName}»</h1>
        </header>
    );
};
