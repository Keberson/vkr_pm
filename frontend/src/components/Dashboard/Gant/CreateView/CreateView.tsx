import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {setLoader} from "../../../../store/slices/LoaderSlice";
import {setToast, setToastMessage} from "../../../../store/slices/ToastSlice";
import {setModal} from "../../../../store/slices/ModalProjectSlice";
import {setIsSubmit} from "../../../../store/slices/CreateSlice";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useCreateViewMutation} from "../../../../services/ViewService";

interface CreateViewProps {
    project: number
}

type Inputs = {
    name: string,
}

export const CreateView: React.FC<CreateViewProps> = ({ project }) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();
    const isSubmit = useAppSelector(state => state.create.isSubmit);
    const type = useAppSelector(state => state.create.type);
    const [createView] = useCreateViewMutation();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        let message = "";
        let isError: boolean = false;
        let toastType: "correct" | "error" = "correct";
        let res;

        dispatch(setLoader({show: true, from: "ModalCreate"}));

        res = await createView({ ...data, project_id: project });

        if ('error' in res) {
            isError = true;
            toastType = "error";
            message = "Ошибка при создании вида";
        } else {
            message = "Вид успешно создан";
        }

        dispatch(setToastMessage(message));
        dispatch(setToast(toastType));
        dispatch(setLoader({show: false, from: "ModalCreate"}));

        if (!isError) {
            dispatch(setModal(false));
        }
    };

    if (type === "view" && isSubmit) {
        handleSubmit(onSubmit)();
        dispatch(setIsSubmit(false));
    }

    return (
        <>
            <div className="flex flex-col w-full">
                <label htmlFor="name" className="text-sm text-text-third">Имя вида</label>
                <input
                    type="text"
                    {...register("name")}
                    className="w-full max-w-2xl ps-2 pe-2 pt-1 pb-1 bg-block-background-secondary text-text rounded-lg border-text-muted border outline-none"
                />
            </div>

        </>
    );
}
