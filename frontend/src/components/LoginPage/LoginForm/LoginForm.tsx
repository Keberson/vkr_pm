import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import {ILogin} from "../../../types/ILogin";

export const LoginForm = () => {
    const {register, handleSubmit} = useForm<ILogin>();

    const onSubmit: SubmitHandler<ILogin> = async (formData) => {
        console.log('Авторизация');
        // await login({login: formData["login"], password: formData["password"]});
    };

    return (
        <div className="container bg-block-background w-1/2 p-8 mx-auto rounded-3xl">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <input type="text"
                       className="h-10 p-5 rounded-lg text-lg bg-block-background-secondary text-text placeholder-text-muted"
                       placeholder="Логин"
                       {...register("login", {required: true, min: 5})}
                />
                <input type="password"
                       className="h-10 p-5 rounded-lg text-lg bg-block-background-secondary text-text placeholder-text-muted"
                       placeholder="Пароль"
                       {...register("password", {required: true, min: 6, max: 20})}
                />
                <input type="submit"
                       value="Войти"
                       className="mt-5 mx-auto w-fit ps-10 pe-10 pt-2 pb-2 rounded-3xl text-lg text-text-third bg-block-background-secondary cursor-pointer"
                />
            </form>
        </div>
    );
};