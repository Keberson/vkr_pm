import {Request, Response} from "express";

import {createWBS, getWBS} from "../services/wbs.service";

const get = async (req: Request, res: Response) => {
    try {
        const result = await getWBS(Number(req.params.id));

        res.status(200).json({ result })
    } catch (err) {
        console.error("Ошибка при получении WBS: " + err.message);
        res.status(400).json({message: err.message});
    }
}

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
    get,
    create
};
