import {Request, Response} from "express";

import {createWBS} from "../services/wbs.service";

const create = async (req: Request, res: Response) => {
    try {
        await createWBS(req.body);

        res.status(200).json({});
    } catch (err) {
        console.error("Ошибка при создании WBS: " + err.message);
        res.status(400).json({message: err.message});
    }
}

export {
    create
};
