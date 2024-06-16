import React from "react";

export const Panel = () => {
    return (
        <div className="w-full bg-background-secondary ps-10 pe-10 pt-2.5 pb-2.5 grid grid-cols-4 gap-5 items-center">
            <div className="flex gap-5">
                <button
                    className="
                    border-text-third border hover:border-text
                    text-text-third hover:text-text
                    w-fit h-icon ps-2 pe-2
                    flex items-center justify-center
                    rounded cursor-pointer"
                >
                    Добавить
                </button>
            </div>
        </div>
    )
};
