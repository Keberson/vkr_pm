import React from "react";
import {useForm} from "react-hook-form";

import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {setModal} from "../../../../store/slices/ModalProjectSlice";
import {CreateWBS} from "../CreateWBS/CreateWBS";
import {useAppSelector} from "../../../../hooks/useAppSelector";

interface ModalGroupProps {
    projectID: number,
    view: number
}

type Inputs = {
    type: "new" | "exist",
    name: string
}

export const ModalGroup: React.FC<ModalGroupProps> = ({ projectID, view }) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        watch
    } = useForm<Inputs>({
        defaultValues: {
            type: "new"
        }
    });
    const type = watch("type");
    const selected = useAppSelector(state => state.group.toGroup);

    return (
        <div className="relative transform overflow-hidden rounded-lg bg-background-secondary text-left shadow-xl transition-all w-full max-w-7xl h-screen flex flex-col justify-between pointer-events-auto">
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full max-w-5xl flex flex-col">
                        <h1 className="text-xl font-semibold leading-6 text-text" id="modal-title">Создание</h1>
                        <div className="mt-5">
                            <form className="flex flex-col gap-3 overflow-auto">
                                <div className="flex gap-5 w-full items-center">
                                    <label htmlFor="type" className="text-sm text-text-third">Тип создаваемой WBS</label>
                                    <select
                                        {...register("type")}
                                        className="ps-2 pe-2 pt-1 pb-1 rounded-lg border-text-muted border outline-none bg-block-background-secondary text-text"
                                    >
                                        <option value="exist">Выбрать существующую WBS</option>
                                        <option value="new">Создать новую WBS</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-5 w-full">
                                    <label htmlFor="name" className="text-sm text-text-third">Имя WBS</label>
                                    {
                                        type === "exist" && (
                                            <select
                                                {...register("name")}
                                                className="ps-2 pe-2 pt-1 pb-1 rounded-lg border-text-muted border outline-none bg-block-background-secondary text-text"
                                            >
                                                <option value="new">Выбрать существующую WBS</option>
                                                <option value="exist">Создать новую WBS</option>
                                            </select>
                                        )
                                    }
                                    {
                                        type === "new" && (
                                            <CreateWBS project={projectID} view={view} childs={selected} />
                                        )
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-block-background-secondary px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    className="inline-flex w-full justify-center rounded-md bg-background-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-block-background sm:ml-3 sm:w-auto"
                    onClick={handleSubmit(() => {})}
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
}
