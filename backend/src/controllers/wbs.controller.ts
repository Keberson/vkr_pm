import {Request, Response} from "express";

import {createWBS, getWBS, getWBSChilds, deleteWBS} from "../services/wbs.service";

const get = async (req: Request, res: Response) => {
    try {
        let result = [];

        if (req.query.project) {
            result = await getWBS(Number(req.query.project));
        } else if (req.query.wbs) {
            result = await getWBSChilds(Number(req.query.wbs));
        }

        res.status(200).json({ result })
    } catch (err) {
        console.error("Ошибка при получении WBS: " + err.message);
        console.error(err);
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

const delete_ = async (req: Request, res: Response) => {
    try {
        await deleteWBS(Number(req.params.id));

        res.status(200).json({});
    } catch (err) {
        console.error("Ошибка при удалении WBS: " + err.message);
        res.status(400).json({message: err.message});
    }
}

export {
    get,
    create,
    delete_
};
