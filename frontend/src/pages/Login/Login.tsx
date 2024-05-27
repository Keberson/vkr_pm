import React from "react";

export const Login = () => {
    return (
        <div className="flex h-full bg-background">
            <div className="container mx-auto my-auto flex flex-col gap-10">
                <h1 className="text-text text-3xl comfortaa-700 text-center">Управление проектами</h1>
                <div className="container flex flex-col gap-5 bg-block-background w-1/2 pt-10 pb-10 ps-8 pe-8 mx-auto rounded-3xl">
                    <input type="text" className="h-10 p-5 rounded-lg text-lg bg-block-background-secondary text-text placeholder-text-muted" placeholder="Логин"/>
                    <input type="password" className="h-10 p-5 rounded-lg text-lg bg-block-background-secondary text-text placeholder-text-muted" placeholder="Пароль" />
                    <input type="submit" value="Войти" className="mt-5 mx-auto bg-text w-fit ps-10 pe-10 pt-2 pb-2 rounded-3xl text-lg text-background" />
                </div>
            </div>
        </div>
    );
};