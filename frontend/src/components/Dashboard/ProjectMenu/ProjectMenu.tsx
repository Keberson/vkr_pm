import React, {useState} from "react";

export const ProjectMenu = () => {
    const [activeItem, setActiveItem] = useState<"tasks" | "tasksTree" | "slicesTree">("tasksTree");

    return (
        <>
            <span
                className={`
                    px-5 py-1 w-fit mx-auto
                    rounded-full cursor-pointer
                    ${activeItem === "tasks" ? "bg-block-background-secondary" : "bg-background-secondary"} hover:bg-block-background-secondary
                    `}
            >
                Список задач
            </span>
            <span
                className={`
                    px-5 py-1 w-fit mx-auto
                    rounded-full cursor-pointer
                    ${activeItem === "tasksTree" ? "bg-block-background-secondary" : "bg-background-secondary"} hover:bg-block-background-secondary
                    `}
            >
                Дерево задач
            </span>
            <span
                className={`
                    px-5 py-1 w-fit mx-auto
                    rounded-full cursor-pointer
                    ${activeItem === "slicesTree" ? "bg-block-background-secondary" : "bg-background-secondary"} hover:bg-block-background-secondary
                    `}
            >
                Дерево срезов
            </span>
        </>
    );
};