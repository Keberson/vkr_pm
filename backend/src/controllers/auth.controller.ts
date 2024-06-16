import {Request, Response} from "express";

import {userLogin} from "../services/users.service";


const login = async (req: Request, res: Response) => {
    try {
        const result: string | undefined = await userLogin(req.body);

        if (result) {
            res.status(200).json({jwt: result});
        } else {
            res.status(401).json({});
        }
    } catch (err) {
        console.error("Ошибка при создании работы: " + err.message);
        res.status(400).json({message: err.message});
    }
}

export {
    login
};
