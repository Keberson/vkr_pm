import React, {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {setModal} from "../../../../store/slices/ModalProjectSlice";
import {CreateActivity} from "../CreateActivity/CreateActivity";
import {CreateWBS} from "../CreateWBS/CreateWBS";
import {CreateView} from "../CreateView/CreateView";
import {setIsSubmit, setType} from "../../../../store/slices/CreateSlice";

interface ModalCreateProps {
    projectID: number,
    view: number
}

type Inputs = {
    type: "activity" | "wbs" | "view",
}

export const ModalCreate: React.FC<ModalCreateProps> = ({ projectID, view }) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        watch
    } = useForm<Inputs>({
        defaultValues: {
            type: "activity"
        }
    });
    const type = watch("type");

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        dispatch(setIsSubmit(true));
    };
    const onClose = () => dispatch(setModal(false));

    useEffect(() => {
        dispatch(setType(type));
    }, [dispatch, type]);

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
                                        <option value="view">Вид</option>
                                    </select>
                                </div>

                                { watch("type") === "activity" && <CreateActivity project={projectID} />}
                                { watch("type") === "wbs" && <CreateWBS  project={projectID} view={view}/>}
                                { watch("type") === "view" && <CreateView  project={projectID}/>}
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
