import React, {ReactNode} from "react";

import {Logo} from "../../Logo/Logo";
import {ProfileIcon} from "../../../assets/ProfileIcon";
import {Panel} from "../Panel/Panel";

interface DashboardHeaderProps {
    children: ReactNode
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ children }) => {

    return (
        <>
            <header className="grid grid-cols-3 items-center ps-20 pe-20 pt-2.5 pb-2.5">
                <div className="flex flex-col justify-center items-start">
                    <div className="flex flex-col items-center">
                        <Logo size={60} />
                        <h1 className="text-text text-lg comfortaa-700">WBS Studio</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    {children}
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center cursor-pointer gap-5">
                        <ProfileIcon size={45} />
                    </div>
                </div>
            </header>
            <Panel />
        </>

    );
};