import {Request, Response} from "express";

import {userLogin} from "../services/users.service";
import {ILoginRes} from "../models/Responses";


const login = async (req: Request, res: Response) => {
    try {
        const result: ILoginRes | undefined = await userLogin(req.body);

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(401).json({});
        }
    } catch (err) {
        console.error("Ошибка при авторизации: " + err.message);
	    console.error(err);
        res.status(400).json({message: err.message});
    }
}

export {
    login
};
