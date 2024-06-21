import React from "react";
import {Draggable} from "react-beautiful-dnd";
import { Tooltip } from 'react-tooltip'

import {IActivity} from "../../../types/IActivity";
import {InfoIcon} from "../../../assets/InfoIcon";

interface ActivityCardProps {
    data: IActivity,
    index: number,
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ data, index }) => {
    return (
        <>
            <Draggable draggableId={`${data.id}`} index={index} key={`${data.id}`}>
                {(providedDrag) => (
                    <div
                        {...providedDrag.dragHandleProps}
                        {...providedDrag.draggableProps}
                        ref={providedDrag.innerRef}
                        className="h-[80px] bg-background-secondary rounded-xl mt-2 px-3 pt-2 pb-3 text-text overflow-hidden flex flex-col justify-center gap-1.5"
                    >
                        <div className="flex justify-between">
                            <h2 className="text-xs">{data.id}</h2>
                            {
                                data.description.length !== 0 &&
                                <>
                                    <div
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={data.description}
                                        data-tooltip-place="bottom">
                                        <InfoIcon />
                                    </div>
                                    <Tooltip id="my-tooltip" />
                                </>
                            }
                        </div>
                        <h3 className="text-ellipsis overflow-hidden text-sm">{data.name}</h3>
                    </div>
                )}
            </Draggable>
        </>
    );
};
