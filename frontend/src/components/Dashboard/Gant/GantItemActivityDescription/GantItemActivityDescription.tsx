import React from "react";
import {useForm} from "react-hook-form";

import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useDeleteActivityMutation, useEditActivityMutation} from "../../../../services/APIService";

import {Tree} from "../../../../types/Tree";

import diffDate from "../../../../utils/diffDate";
import {clear, toggleEditor} from "../../../../store/slices/EditorSlice";
import {setLoader} from "../../../../store/slices/LoaderSlice";
import {setToast, setToastMessage} from "../../../../store/slices/ToastSlice";

import {CrossIcon} from "../../../../assets/CrossIcon";

interface Inputs {
    wbs: number,
    name: string,
    description: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
}

export const GantItemActivityDescription: React.FC = () => {
    const dispatch = useAppDispatch();
    const activity = useAppSelector(state => state.editor.activity);
    const tree = useAppSelector(state => state.tree.tree);
    const wbs = useAppSelector(state => state.tree.wbs);
    const [editActivity] = useEditActivityMutation();
    const [deleteActivity] = useDeleteActivityMutation();
    const wbsIdRaw = Tree.findParent(tree.getRoot(), "0", `activity-${activity.id}`)?.split("wbs-")[1];
    const wbsId = wbsIdRaw ? Number(wbsIdRaw) : -1;
    const {
        register,
        watch,
        handleSubmit,
    } = useForm<Inputs>({
        defaultValues: {
            wbs: wbsId,
            name: activity.name,
            description: activity.description,
            date_start_plan: activity.date_start_plan.split('T')[0],
            date_finish_plan: activity.date_finish_plan.split('T')[0],
            date_start_actual: activity.date_start_actual ? activity.date_start_actual.split('T')[0] : '',
            date_finish_actual: activity.date_finish_actual? activity.date_finish_actual.split('T')[0] : '',
        }
    });
    const activityChanges = {
        wbs: watch("wbs"),
        name: watch("name"),
        description: watch("description"),
        date_start_plan: watch("date_start_plan"),
        date_finish_plan: watch("date_finish_plan"),
        date_start_actual: watch("date_start_actual"),
        date_finish_actual: watch("date_finish_actual"),
    }

    const isHaveChanges: boolean =
        Number(activityChanges.wbs) !== wbsId ||
        activityChanges.name !== activity.name ||
        activityChanges.description !== activity.description ||
        activityChanges.date_start_plan !== activity.date_start_plan.split('T')[0] ||
        activityChanges.date_start_actual !== (activity.date_start_actual ? activity.date_start_actual.split('T')[0] : '') ||
        activityChanges.date_finish_plan !== activity.date_finish_plan.split('T')[0] ||
        activityChanges.date_finish_actual !== (activity.date_finish_actual? activity.date_finish_actual.split('T')[0] : '')
    ;

    const saveStyles = isHaveChanges ? "border-light text-text cursor-pointer" : "cursor-default border-text-secondary text-text-muted";

    const onClose = () => {
        dispatch(clear());
        dispatch(toggleEditor());
    }
    const onDelete = async () => {
        dispatch(setLoader({show: true, from: "GantItemActivityDescription"}));

        const res = await deleteActivity(activity.id);
        let isError = false;
        let message = "Работа удалена";
        let toastType: "error" | "correct" = "correct";

        if ('error' in res) {
            isError = true;
            message = "Ошибка при удалении работы";
            toastType = "error";
        }

        dispatch(setToast(toastType));
        dispatch(setToastMessage(message));
        dispatch(setLoader({show: false, from: "GantItemActivityDescription"}));

        if (!isError) {
            dispatch(toggleEditor());
            dispatch(clear());
        }
    }
    const onSave = async (data: Inputs) => {
        if (isHaveChanges) {
            dispatch(setLoader({show: true, from: "GantItemActivityDescription"}));

            const res = await editActivity({
                wbs: data.wbs,
                activity: {
                    id: activity.id,
                    name: data.name,
                    description: data.description,
                    date_start_plan: data.date_start_plan,
                    date_finish_plan: data.date_finish_plan,
                    date_start_actual: data.date_start_actual,
                    date_finish_actual: data.date_finish_actual,
                    wbs: wbsId
                }
            });

            let isError = false;
            let message = "Работа изменена";
            let toastType: "error" | "correct" = "correct";

            if ('error' in res) {
                isError = true;
                message = "Ошибка при изменении работы";
                toastType = "error";
            }

            dispatch(setToast(toastType));
            dispatch(setToastMessage(message));
            dispatch(setLoader({show: false, from: "GantItemActivityDescription"}));

            if (!isError) {
                dispatch(toggleEditor());
                dispatch(clear());
            }
        }
    };

    return (
        <div className="w-full bg-background-secondary ps-5 pe-5 pt-2 pb-2 text-text gap-2 flex flex-col" >
            <div className="w-full flex flex-col gap-2">
                <div className="inline-flex items-center w-full justify-between">
                    <div className="flex gap-5">
                        <h2 className="font-bold">Редактирование работы "{activity.name}"</h2>
                        <select className="text-black" {...register("wbs")}>
                            {wbsId === -1 ?
                                <option value={-1}>Корневая WBS</option>
                                :
                                <>
                                    <option value={wbsId}>{wbs.find(element => element.id === wbsId)!.name}</option>
                                    <option value={-1}>Корневая WBS</option>
                                </>
                            }
                            {
                                wbs.filter(element => element.id !== wbsId).map(element => (
                                    <option value={element.id}>{element.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="flex gap-5">
                        <button
                            className="ps-2 pe-2 pt-1 pb-1 border-2 border-light rounded-md"
                            onClick={onDelete}
                        >
                            Удалить
                        </button>
                        <button
                            className={`ps-2 pe-2 pt-1 pb-1 border-2 ${saveStyles} rounded-md`}
                            onClick={handleSubmit(onSave)}
                        >
                            Сохранить
                        </button>
                        <button onClick={onClose}>
                            <CrossIcon size={10} />
                        </button>
                    </div>
                </div>
                <hr />
            </div>
            <div className="grid grid-cols-3 gap-x-3 gap-y-3 pb-2 text-black overflow-auto">
                <div className="">
                    <label className="text-text">Заголовок работы</label>
                    <input
                        type="text"
                        placeholder="Заголовок работы"
                        className="ps-2 pe-2 pt-1 pb-1 w-full"
                        {...register("name")}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Статус</label>
                    <span className="ps-2 pe-2 pt-1 pb-1 w-fill h-full text-text border border-text rounded">{activity.status}</span>
                </div>
                <div />
                <div className="col-span-3">
                    <label className="text-text">Описание</label>
                    <textarea
                        placeholder="Описание"
                        className="ps-2 pe-2 pt-1 pb-1 text-black w-full"
                        {...register("description")}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата старта (план)</label>
                    <input
                        type="date"
                        {...register("date_start_plan")}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата финиша (план)</label>
                    <input
                        type="date"
                        {...register("date_finish_plan")}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-text">Длительность (план), дней</span>
                    <span className="ps-2 pe-2 pt-1 pb-1 w-fill h-full text-text border border-text rounded">{diffDate(activity.date_finish_plan, activity.date_start_plan)}</span>
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата старта (факт)</label>
                    <input
                        type="date"
                        {...register("date_start_actual")}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата финиша (факт)</label>
                    <input
                        type="date"
                        {...register("date_finish_actual")}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-text">Длительность (факт), дней</span>
                    <span className="ps-2 pe-2 pt-1 pb-1 w-fill h-full text-text border border-text rounded">{diffDate(activityChanges.date_finish_actual, activityChanges.date_start_actual)}</span>
                </div>
            </div>
        </div>
    );
};
