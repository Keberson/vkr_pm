import React from "react";
import {DashboardWBS} from "../DashboardWBS/DashboardWBS";
import {DashboardTree} from "../DashboardTree/DashboardTree";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {changeViewState} from "../../store/slices/projectPageSlice";
import {useAppSelector} from "../../hooks/useAppSelector";

export const DashboardWBSTree = () => {
    const dispatch = useAppDispatch();
    const activeView = useAppSelector(state => state.projectPage.view_state);
    const activeViewStyles  = "text-gray-300 cursor-pointer";
    const viewStyles = "text-xl font-bold";
    const buttonsObjects = [
        {
            name: "table",
            title: "Таблица"
        },
        {
            name: "tree",
            title: "Дерево"
        }
    ];

    const changeViewStateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(changeViewState(e.currentTarget.name));
    }

    return (
        <div className="xl: h-[inherit]">
            <div>
                <h2 className="text-xl font-bold">WBS</h2>
            </div>
            <div className="flex gap-10 mt-4">
                {
                    buttonsObjects.map(buttonObject => (
                        <button
                            className={`${viewStyles} ${buttonObject.name !== activeView ? activeViewStyles : '' }`}
                            onClick={changeViewStateHandler}
                            name={buttonObject.name}
                        >
                            {buttonObject.title}
                        </button>
                    ))
                }
            </div>
            <div className="flex gap-4">
                <button className="text-xl font-medium underline-offset-4 underline">Общее</button>
                <button className="text-xl font-medium">Вид 1</button>
                <button className="text-xl font-medium">Вид 2</button>
            </div>

            {
                activeView === 'table' ?
                    <DashboardWBS />
                    :
                    <DashboardTree />
            }
        </div>
    );
};
