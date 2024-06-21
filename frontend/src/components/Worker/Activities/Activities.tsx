import React from "react";
import {Column} from "../Column/Column";
import {ActivityCard} from "../ActivityCard/ActivityCard";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {addToDoneOnIndex, addToInWorkingOnIndex, addToNotStartedOnIndex, deleteFromDone, deleteFromInWorking, deleteFromNotStarted} from "../../../store/slices/WorkerSlice";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {IActivity} from "../../../types/IActivity";
import {useEditStatusActivityMutation} from "../../../services/APIService";
import {setLoader} from "../../../store/slices/LoaderSlice";

export const Activities = () => {
    const dispatch = useAppDispatch();
    const [editActivityStatus] = useEditStatusActivityMutation();
    const notStarted = useAppSelector(state => state.worker.notStarted);
    const inWorking = useAppSelector(state => state.worker.inWorking);
    const done = useAppSelector(state => state.worker.done);

    const handleDragDrop = async (results: DropResult) => {
        const {source, destination, draggableId} = results;

        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        let deleted: IActivity;
        let newStatus: "Не начата" | "Выполняется" | "Завершена";

        if (source.droppableId === "not-started") {
            deleted = notStarted.find(item => item.id === Number(draggableId))!;

            dispatch(deleteFromNotStarted(deleted.id));
        } else if (source.droppableId === "in-working") {
            deleted = inWorking.find(item  => item.id === Number(draggableId))!;

            dispatch(deleteFromInWorking(deleted.id));
        } else {
            deleted = done.find(item => item.id === Number(draggableId))!;

            dispatch(deleteFromDone(deleted.id));
        }

        if (destination.droppableId === "not-started") {
            dispatch(addToNotStartedOnIndex({index: destination.index, activity: deleted}));
            newStatus = "Не начата";
        } else if (destination.droppableId === "in-working") {
            dispatch(addToInWorkingOnIndex({index: destination.index, activity: deleted}));
            newStatus = "Выполняется";
        } else {
            dispatch(addToDoneOnIndex({index: destination.index, activity: deleted}));
            newStatus = "Завершена";
        }

        dispatch(setLoader({show: true, from: "Activities"}));

        const res = await editActivityStatus({
            ...deleted,
            status: newStatus
        });

        dispatch(setLoader({show: false, from: "Activities"}));
    };

    return (
        <DragDropContext
            onDragEnd={handleDragDrop}
        >
            <Column title="Не начата" droppableId="not-started" isNeedBorderR={true}>
                <>
                    {notStarted.map((activity, index) => (
                        <ActivityCard data={activity} index={index} />
                    ))}
                </>
            </Column>
            <Column title="Выполняется" droppableId="in-working">
                <>
                    {inWorking.map((activity, index) => (
                        <ActivityCard data={activity} index={index} />
                    ))}
                </>
            </Column>
            <Column title="Завершена" droppableId="done" isNeedBorderL={true}>
                <>
                    {done.map((activity, index) => (
                        <ActivityCard data={activity} index={index} />
                    ))}
                </>
            </Column>
        </DragDropContext>
    );
};
