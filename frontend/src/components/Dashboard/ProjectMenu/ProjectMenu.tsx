import React from "react";

export const ProjectMenu = () => {
    return (
        <>
            <span
                className="
                    px-5 py-1 w-fit mx-auto
                    rounded-full cursor-pointer
                    bg-block-background-secondary hover:bg-block-background-secondary
                    "
            >
                Список задач
            </span>
            <span
                className="
                    px-5 py-1 w-fit mx-auto
                    rounded-full cursor-pointer
                    bg-background-secondary hover:bg-block-background-secondary
                    "
            >
                Дерево задач
            </span>
            <span
                className="
                    px-5 py-1 w-fit mx-auto
                    rounded-full cursor-pointer
                    bg-background-secondary hover:bg-block-background-secondary
                    "
            >
                Дерево срезов
            </span>
        </>
    );
};