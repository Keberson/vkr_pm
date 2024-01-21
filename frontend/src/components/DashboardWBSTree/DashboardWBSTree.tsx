import React from "react";
import {DashboardWBS} from "../DashboardWBS/DashboardWBS";

export const DashboardWBSTree = () => {
    return (
        <div>
            <div>
                <h2 className="text-xl font-bold">WBS</h2>
            </div>
            <div className="flex gap-10 mt-4">
                <button className="text-xl font-bold">Вложенность</button>
                <button className="text-xl font-bold text-gray-300 cursor-pointer">Дерево</button>
            </div>
            <DashboardWBS />
        </div>
    );
};
