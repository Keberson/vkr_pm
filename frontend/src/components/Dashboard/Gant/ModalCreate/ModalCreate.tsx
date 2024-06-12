import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {TStatus} from "../../../../types/TStatus";

import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useCreateActivityMutation} from "../../../../services/ActivityService";
import {setLoader} from "../../../../store/slices/LoaderSlice";
import {setToast, setToastMessage} from "../../../../store/slices/ToastSlice";
import {setModal} from "../../../../store/slices/ModalProjectSlice";
import {useCreateWBSMutation} from "../../../../services/WBSService";

interface ModalCreateProps {
    projectID: number,
}

type Inputs = {
    type: "activity" | "wbs",
    name: string,
    date_start_plan: Date,
    date_finish_plan: Date,
    date_start_actual: Date,
    date_finish_actual: Date,
    status: TStatus,
    description: string
}

export const ModalCreate: React.FC<ModalCreateProps> = ({ projectID }) => {
    const dispatch = useAppDispatch();
    const [createActivity] = useCreateActivityMutation();
    const [createWBS] = useCreateWBSMutation();

    const {
        register,
        handleSubmit,
        watch
    } = useForm<Inputs>({
        defaultValues: {
            type: "activity"
        }
    });
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const {type, ...rawDataActivity} = data;
        let message = "";
        let isError: boolean = false;
        let toastType: "correct" | "error" = "correct";
        let res;

        dispatch(setLoader(true));


        if (type === "activity") {
            res = await createActivity({ ...rawDataActivity, project_id: projectID });

            if ('error' in res) {
                isError = true;
                toastType = "error";
                message = "Ошибка при создании работы";
            } else {
                message = "Работа успешно создана";
            }
        } else {
            const {description, ...rawDataWBS } = rawDataActivity;
            res = await createWBS({ ...rawDataWBS, project_id: projectID });

            if ('error' in res) {
                isError = true;
                toastType = "error";
                message = "Ошибка при создании WBS";
            } else {
                message = "WBS успешно создана";
            }
        }

        dispatch(setToastMessage(message));
        dispatch(setToast(toastType));
        dispatch(setLoader(false));

        if (!isError) {
            dispatch(setModal(false));
        }
    };
    const onClose = () => dispatch(setModal(false));

    return (
        <div className="relative transform overflow-hidden rounded-lg bg-background-secondary text-left shadow-xl transition-all w-full max-w-7xl h-screen flex flex-col justify-between pointer-events-auto">
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full max-w-5xl flex flex-col">
                        <h1 className="text-xl font-semibold leading-6 text-text" id="modal-title">Создание</h1>
                        <div className="mt-5">
                            <form className="flex flex-col gap-3">
                                <div className="flex gap-5 w-full items-center">
                                    <label htmlFor="type" className="text-sm text-text-third">Тип создаваемого объекта</label>
                                    <select
                                        {...register("type")}
                                        name="type"
                                        className="ps-2 pe-2 pt-1 pb-1 rounded-lg border-text-muted border outline-none bg-block-background-secondary text-text"
                                    >
                                        <option value="activity">Работа</option>
                                        <option value="wbs">WBS</option>
                                    </select>
                                </div>

                                <div className="flex flex-col w-full">
                                    <label htmlFor="name" className="text-sm text-text-third">Имя { watch("type") === "activity" ? "работы" : "WBS" }</label>
                                    <input
                                        type="text"
                                        {...register("name")}
                                        className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                                    />
                                </div>

                                { watch("type") !== "wbs" &&
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="description" className="text-sm text-text-third flex flex-col w-full">Описание работы</label>
                                        <textarea
                                            {...register("description")}
                                            className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none resize-none"
                                        />
                                    </div>
                                }

                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col max-w-sm w-full">
                                        <label htmlFor="date_start_plan" className="text-text-third">Дата старта (план)</label>
                                        <input
                                            type="date"
                                            {...register("date_start_plan")}
                                            className="w-full max-w-xl ps-2 pe-2 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col max-w-sm w-full">
                                        <label htmlFor="date_finish_plan" className="text-text-third">Дата финиша (план)</label>
                                        <input
                                            type="date"
                                            {...register("date_finish_plan")}
                                            className="w-full max-w-xl ps-2 pe-2 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col max-w-sm w-full">
                                        <label htmlFor="date_start_actual" className="text-text-third">Дата старта (факт)</label>
                                        <input
                                            type="date"
                                            {...register("date_start_actual")}
                                            className="w-full max-w-xl ps-2 pe-2 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none "
                                        />
                                    </div>
                                    <div className="flex flex-col max-w-sm w-full">
                                        <label htmlFor="date_finish_actual" className="text-text-third">Дата финиша (факт)</label>
                                        <input type="date"
                                               {...register("date_finish_actual")}
                                               className="w-full max-w-xl ps-2 pe-2 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col w-full">
                                    <label htmlFor="status" className="text-sm text-text-third">Статус {watch("type") === "activity" ? "работы" : "WBS"}</label>
                                    <select
                                        {...register("status")}
                                        className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                                    >
                                        <option value="Не начата">Не начата</option>
                                        <option value="Выполняется">Выполняется</option>
                                        <option value="Завершена">Завершена</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-block-background-secondary px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    className="inline-flex w-full justify-center rounded-md bg-background-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-block-background sm:ml-3 sm:w-auto"
                    onClick={handleSubmit(onSubmit)}
                >
                    Создать
                </button>
                <button
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={onClose}
                >
                    Закрыть
                </button>
            </div>
        </div>
    )
};
