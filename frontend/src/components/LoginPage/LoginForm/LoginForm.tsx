import React from "react";

export const LoginForm = () => {
    return (
        <div className="container flex flex-col gap-5 bg-block-background w-1/2 p-8 mx-auto rounded-3xl">
            <input type="text" className="h-10 p-5 rounded-lg text-lg bg-block-background-secondary text-text placeholder-text-muted" placeholder="Логин"/>
            <input type="password" className="h-10 p-5 rounded-lg text-lg bg-block-background-secondary text-text placeholder-text-muted" placeholder="Пароль" />
            <input type="submit"
                   value="Войти"
                   className="
                    mt-5 mx-auto w-fit ps-10 pe-10 pt-2 pb-2 rounded-3xl
                    text-lg text-text-third bg-block-background-secondary"
            />
        </div>
    );
};