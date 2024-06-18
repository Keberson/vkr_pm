import React from "react";
import {useForm} from "react-hook-form";

import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useDeleteWBSMutation, useEditWBSMutation} from "../../../../services/APIService";

import diffDate from "../../../../utils/diffDate";
import {clear, toggleEditor} from "../../../../store/slices/EditorSlice";
import {setLoader} from "../../../../store/slices/LoaderSlice";
import {setToast, setToastMessage} from "../../../../store/slices/ToastSlice";

import {CrossIcon} from "../../../../assets/CrossIcon";
import {Tree} from "../../../../types/Tree";

interface Inputs {
    name: string,
    wbs: number
}

export const GantItemWBSDescription: React.FC = () => {
    const dispatch = useAppDispatch();
    const [deleteWBS] = useDeleteWBSMutation();
    const [editWBS] = useEditWBSMutation();
    const wbs = useAppSelector(state => state.editor.wbs);
    const tree = useAppSelector(state => state.tree.tree);
    const wbses = useAppSelector(state => state.tree.wbs);
    const parentIdRaw = Tree.findParent(tree.getRoot(), "0", `wbs-${wbs.id}`)?.split("wbs-")[1];
    const parentId = parentIdRaw ? Number(parentIdRaw) : -1;
    const {
        register,
        watch,
        handleSubmit,
    } = useForm<Inputs>({
        defaultValues: {
            name: wbs.name,
            wbs: parentId
        }
    });
    const wbsChanges = {
        name: watch("name"),
        wbs: watch("wbs")
    }

    const isHaveChanges: boolean = wbsChanges.name !== wbs.name || wbsChanges.wbs !== parentId;

    const saveStyles = isHaveChanges ? "border-light text-text cursor-pointer" : "cursor-default border-text-secondary text-text-muted";

    const onClose = () => {
        dispatch(clear());
        dispatch(toggleEditor());
    }
    const onDelete = async () => {
        dispatch(setLoader({show: true, from: "GantItemWBSDescription"}));

        const res = await deleteWBS(wbs.id);
        let isError = false;
        let message = "WBS удалена";
        let toastType: "error" | "correct" = "correct";

        if ('error' in res) {
            isError = true;
            message = "Ошибка при удалении WBS";
            toastType = "error";
        }

        dispatch(setToast(toastType));
        dispatch(setToastMessage(message));
        dispatch(setLoader({show: false, from: "GantItemWBSDescription"}));

        if (!isError) {
            dispatch(toggleEditor());
            dispatch(clear());
        }
    }
    const onSave = async (data: Inputs) => {
        if (isHaveChanges) {
            dispatch(setLoader({show: true, from: "GantItemWBSDescription"}));

            const res = await editWBS({
                id: wbs.id,
                name: data.name,
                parent: data.wbs,
                oldParent: parentId
            });

            let isError = false;
            let message = "WBS изменена";
            let toastType: "error" | "correct" = "correct";

            if ('error' in res) {
                isError = true;
                message = "Ошибка при изменении WBS";
                toastType = "error";
            }

            dispatch(setToast(toastType));
            dispatch(setToastMessage(message));
            dispatch(setLoader({show: false, from: "GantItemWBSDescription"}));

            if (!isError) {
                dispatch(toggleEditor());
                dispatch(clear());
            }
        }
    };


    console.log(wbs);

    return (
        <div className="w-full bg-background-secondary ps-5 pe-5 pt-2 pb-2 text-text gap-2 flex flex-col" >
            <div className="w-full flex flex-col gap-2">
                <div className="inline-flex items-center w-full justify-between">
                    <div className="flex gap-5">
                        <h2 className="font-bold">Редактирование WBS "{wbs.name}"</h2>
                        <select className="text-black" {...register("wbs")}>
                            {parentId === -1 ?
                                <option value={-1}>Корневая WBS</option>
                                :
                                <>
                                    <option value={parentId}>{wbses.find(element => element.id === parentId)!.name}</option>
                                    <option value={-1}>Корневая WBS</option>
                                </>
                            }
                            {
                                wbses.filter(element => element.id !== parentId && element.id !== wbs.id).map(element => (
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
                    <span className="ps-2 pe-2 pt-1 pb-1 w-fill h-full text-text border border-text rounded">{wbs.status}</span>
                </div>
                <div />
                <div className="flex flex-col">
                    <label className="text-text">Дата старта (план)</label>
                    <input
                        type="date"
                        value={wbs.date_start_plan ? wbs.date_start_plan.split('T')[0] : ''}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата финиша (план)</label>
                    <input
                        type="date"
                        value={wbs.date_finish_plan ? wbs.date_finish_plan.split('T')[0] : ''}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-text">Длительность (план), дней</span>
                    <span className="ps-2 pe-2 pt-1 pb-1 w-fill h-full text-text border border-text rounded">{diffDate(wbs.date_finish_plan, wbs.date_start_plan)}</span>
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата старта (факт)</label>
                    <input
                        type="date"
                        value={wbs.date_start_actual ? wbs.date_start_actual.split('T')[0] : ''}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата финиша (факт)</label>
                    <input
                        type="date"
                        value={wbs.date_finish_actual ? wbs.date_finish_actual.split('T')[0] : ''}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-text">Длительность (факт), дней</span>
                    <span className="ps-2 pe-2 pt-1 pb-1 w-fill h-full text-text border border-text rounded">{diffDate(wbs.date_finish_actual ? wbs.date_finish_actual : "", wbs.date_start_actual ? wbs.date_start_actual : "")}</span>
                </div>
            </div>
        </div>
    );
};
