import React from "react";

import {useAppDispatch} from "../../../../hooks/useAppDispatch";

import {setModal} from "../../../../store/slices/ModalProjectSlice";
import {useForm} from "react-hook-form";
import {setLoader} from "../../../../store/slices/LoaderSlice";
import {useCreateProjectMutation} from "../../../../services/APIService";
import {setToast, setToastMessage} from "../../../../store/slices/ToastSlice";

interface Inputs {
    name: string,
    description: string
}

export const CreateProject = () => {
    const dispatch = useAppDispatch();
    const [createProject] = useCreateProjectMutation();
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit = async (data: Inputs) => {
        dispatch(setLoader({show: true, from: "CreateProject"}));

        let isError = false;
        let toastType: "error" | "correct" = "correct";
        let message: string;
        const res = await createProject({
            ...data,
            date_start_plan: '',
            date_finish_plan: '',
            date_start_actual: '',
            date_finish_actual: ''
        });

        if ('error' in res) {
            isError = true;
            toastType = "error";
            message = "Ошибка при создании работы";
        } else {
            message = "Работа успешно создана";
        }

        dispatch(setToastMessage(message));
        dispatch(setToast(toastType));
        dispatch(setLoader({show: false, from: "CreateProject"}));

        if (!isError) {
            dispatch(setModal(false));
        }
    };

    return (
        <div className="relative transform overflow-hidden rounded-lg bg-background-secondary text-left shadow-xl transition-all w-full max-w-7xl h-screen flex flex-col justify-between pointer-events-auto">
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full max-w-5xl flex flex-col">
                        <h1 className="text-xl font-semibold leading-6 text-text" id="modal-title">Создание проекта</h1>
                        <div className="mt-5">
                            <form className="flex flex-col gap-4 overflow-auto w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="name" className="text-sm text-text-third">Имя проекта</label>
                                    <input
                                        type="text"
                                        {...register("name")}
                                        className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="description" className="text-sm text-text-third">Описание проекта</label>
                                    <textarea
                                        {...register("description")}
                                        className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none resize-none"
                                    />
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
                    onClick={() => dispatch(setModal(false))}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};
