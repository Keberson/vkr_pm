import {Request, Response} from "express";

import {createActivity} from "../services/activity.service";

const create = async (req: Request, res: Response) => {
    try {
        await createActivity(req.body);

        res.status(200).json({});
    } catch (err) {
        console.error("Ошибка при создании работы: " + err.message);
        res.status(400).json({message: err.message});
    }
}

export {
    create
};
