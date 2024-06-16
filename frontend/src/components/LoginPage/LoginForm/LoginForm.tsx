import React from "react";
import {useForm, SubmitHandler} from "react-hook-form"

import {ILogin} from "../../../types/ILogin";
import {useLoginMutation} from "../../../services/LoginService";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {setLoader} from "../../../store/slices/LoaderSlice";
import {setToast, setToastMessage} from "../../../store/slices/ToastSlice";

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const [login] = useLoginMutation();
    const {register, handleSubmit} = useForm<ILogin>();

    const onSubmit: SubmitHandler<ILogin> = async (data) => {
        dispatch(setLoader({show: true, from: "LoginForm"}));
        const res = await login(data);

        if ('error' in res) {
            dispatch(setToastMessage("Ошибка авторизации"));
            dispatch(setToast("error"));
        } else {
            dispatch(setToastMessage(`Добро пожаловать, ${res.data.name}`));
            dispatch(setToast("correct"));
        }

        dispatch(setLoader({show: false, from: "LoginForm"}));
    };

    return (
        <div className="container bg-block-background w-1/2 p-8 mx-auto rounded-3xl">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <input type="text"
                       className="h-10 p-5 rounded-lg text-lg bg-block-background-secondary text-text placeholder-text-muted"
                       placeholder="Логин"
                       {...register("login")}
                />
                <input type="password"
                       className="h-10 p-5 rounded-lg text-lg bg-block-background-secondary text-text placeholder-text-muted"
                       placeholder="Пароль"
                       {...register("password")}
                />
                <input type="submit"
                       value="Войти"
                       className="mt-5 mx-auto w-fit ps-10 pe-10 pt-2 pb-2 rounded-3xl text-lg text-text-third bg-block-background-secondary cursor-pointer"
                />
            </form>
        </div>
    );
};