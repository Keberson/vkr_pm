import React from "react";

import {Logo} from "../../components/Logo/Logo";
import {RosatomIcon} from "../../assets/RosatomIcon";
import {BMSTUIcon} from "../../assets/BMSTUIcon";
import {NavLink} from "react-router-dom";

export const MainPage = () => {
    return (
        <div className="flex h-full">
            <div className="container mx-auto mt-20 flex flex-col gap-10">
                <div className="flex flex-col items-center">
                    <Logo size={120} />
                    <h1 className="text-text text-3xl comfortaa-700 text-center">WBS Studio</h1>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <h2 className="text-text text-2xl comfortaa-700 text-center">
                        Выпускная квалификационная работа
                    </h2>
                    <NavLink to="/login">
                        <button className="text-text text-xl border-light border w-fit ps-5 pe-5 pt-1 pb-1 rounded-xl">
                            Войти
                        </button>
                    </NavLink>
                    <hr className="w-full" />
                    <div>
                        <h2 className="text-text text-xl comfortaa-700 text-center">
                            Разработал - Кузов Максим Юрьевич
                        </h2>
                        <h2 className="text-text text-xl comfortaa-700 text-center">
                            Руководитель - Берчун Юрий Валерьевич
                        </h2>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <RosatomIcon size={100} />
                        <BMSTUIcon width={110} height={120} />
                    </div>
                </div>
            </div>
        </div>
    )
};
