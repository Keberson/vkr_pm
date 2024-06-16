import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {TStatus} from "../../../../types/TStatus";
import {setLoader} from "../../../../store/slices/LoaderSlice";
import {setToast, setToastMessage} from "../../../../store/slices/ToastSlice";
import {setModal} from "../../../../store/slices/ModalProjectSlice";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useCreateActivityMutation} from "../../../../services/APIService";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {setIsSubmit} from "../../../../store/slices/CreateSlice";

interface CreateActivityProps {
    project: number
}

type Inputs = {
    name: string,
    date_start_plan: string,
    date_finish_plan: string,
    date_start_actual: string,
    date_finish_actual: string,
    description: string
}

export const CreateActivity: React.FC<CreateActivityProps> = ({ project }) => {
    const dispatch = useAppDispatch();
    const [createActivity] = useCreateActivityMutation();
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();
    const isSubmit = useAppSelector(state => state.create.isSubmit);
    const type = useAppSelector(state => state.create.type);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        let message = "";
        let isError: boolean = false;
        let toastType: "correct" | "error" = "correct";
        let res;

        dispatch(setLoader({show: true, from: "ModalCreate"}));

        res = await createActivity({ ...data, project_id: project });

        if ('error' in res) {
            isError = true;
            toastType = "error";
            message = "Ошибка при создании работы";
        } else {
            message = "Работа успешно создана";
        }

        dispatch(setToastMessage(message));
        dispatch(setToast(toastType));
        dispatch(setLoader({show: false, from: "ModalCreate"}));

        if (!isError) {
            dispatch(setModal(false));
        }
    };

    if (type === "activity" && isSubmit) {
        handleSubmit(onSubmit)();
        dispatch(setIsSubmit(false));
    }

    return (
        <>
            <div className="flex flex-col w-full">
                <label htmlFor="name" className="text-sm text-text-third">Имя работы</label>
                <input
                    type="text"
                    {...register("name")}
                    className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="description" className="text-sm text-text-third flex flex-col w-full">Описание работы</label>
                <textarea
                    {...register("description")}
                    className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none resize-none"
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
        </>
    )
};
