import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {TStatus} from "../../../../types/TStatus";

import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useCreateWBSMutation} from "../../../../services/APIService";

import {setLoader} from "../../../../store/slices/LoaderSlice";
import {setToast, setToastMessage} from "../../../../store/slices/ToastSlice";
import {setModal} from "../../../../store/slices/ModalProjectSlice";
import {setIsSubmit} from "../../../../store/slices/CreateSlice";

interface CreateWBSProps {
    project: number,
    view: number,
    childs?: string[]
}

type Inputs = {
    name: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
    status: TStatus,
}

export const CreateWBS: React.FC<CreateWBSProps> = ({ project, view, childs = [] }) => {
    const dispatch = useAppDispatch();
    const [createWBS] = useCreateWBSMutation();
    const isSubmit = useAppSelector(state => state.create.isSubmit);
    const type = useAppSelector(state => state.create.type);
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        let message = "";
        let isError: boolean = false;
        let toastType: "correct" | "error" = "correct";
        let res;

        dispatch(setLoader({show: true, from: "ModalCreate"}));

        res = await createWBS({
            wbs: {
                ...data,
                project_id: project,
                id_view: view
            },
            childs: childs
        });

        if ('error' in res) {
            isError = true;
            toastType = "error";
            message = "Ошибка при создании WBS";
        } else {
            message = "WBS успешно создана";
        }

        dispatch(setToastMessage(message));
        dispatch(setToast(toastType));
        dispatch(setLoader({show: false, from: "ModalCreate"}));

        if (!isError) {
            dispatch(setModal(false));
        }
    };

    if (type === "wbs" && isSubmit) {
        handleSubmit(onSubmit)();
        dispatch(setIsSubmit(false));
    }

    return (
        <>
            <div className="flex flex-col w-full">
                <label htmlFor="name" className="text-sm text-text-third">Имя WBS</label>
                <input
                    type="text"
                    {...register("name")}
                    className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                />
            </div>
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
                <label htmlFor="status" className="text-sm text-text-third">Статус WBS</label>
                <select
                    {...register("status")}
                    className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                >
                    <option value="Не начата">Не начата</option>
                    <option value="Выполняется">Выполняется</option>
                    <option value="Завершена">Завершена</option>
                </select>
            </div>
        </>
    )
}
