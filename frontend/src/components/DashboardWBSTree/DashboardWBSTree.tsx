import React from "react";
import {DashboardWBS} from "../DashboardWBS/DashboardWBS";
import {DashboardTree} from "../DashboardTree/DashboardTree";

export const DashboardWBSTree = () => {
    return (
        <div className="xl: h-[inherit]">
            <div>
                <h2 className="text-xl font-bold">WBS</h2>
            </div>
            <div className="flex gap-10 mt-4">
                <button className="text-xl font-bold">Вложенность</button>
                <button className="text-xl font-bold text-gray-300 cursor-pointer">Дерево</button>
            </div>
            <div className="flex gap-4">
                <button className="text-xl font-medium underline-offset-4 underline">Общее</button>
                <button className="text-xl font-medium">Вид 1</button>
                <button className="text-xl font-medium">Вид 2</button>
            </div>
            {/*<DashboardWBS />*/}
            <DashboardTree />
        </div>
    );
};
