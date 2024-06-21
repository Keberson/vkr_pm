import React from "react";
import {Droppable} from "react-beautiful-dnd";

interface ColumnProps {
    title: string,
    droppableId: string,
    children: JSX.Element,
    isNeedBorderR?: boolean,
    isNeedBorderL?: boolean,
}

export const Column: React.FC<ColumnProps> = ({ title, droppableId, children, isNeedBorderR = false, isNeedBorderL = false }) => {
    const borderStyle = isNeedBorderR ? "border-r border-text-secondary" : isNeedBorderL ? "border-l border-text-secondary" : "";

    return (
        <div className={`flex flex-col overflow-hidden w-full h-full ${borderStyle}`}>
            <h1 className="text-center text-text">{title}</h1>
            <Droppable droppableId={droppableId}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="mt-5 w-full h-full overflow-auto px-2"
                    >
                        {children}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
