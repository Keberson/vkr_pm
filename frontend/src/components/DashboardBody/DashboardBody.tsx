import React from "react";
import {DashboardTasks} from "../DashboardTasks/DashboardTasks";
import {DashboardWBSTree} from "../DashboardWBSTree/DashboardWBSTree";

export const DashboardBody = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-6 xl:h-[75vh] 2xl:h-[80vh]">
            <DashboardTasks />
            <DashboardWBSTree />
        </div>
    );
};
