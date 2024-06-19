import {Request, Response} from "express";

import {getViewByProject, createView} from "../services/view.service";

const get = async (req: Request, res: Response) => {
    try {
        const result = await getViewByProject(Number(req.params.id));

        res.status(200).json({ result })
    } catch (err) {
        console.error("Ошибка при получении видов: " + err.message);
	    console.error(err);
        res.status(400).json({message: err.message});
    }
}

const create = async (req: Request, res: Response) => {
    try {
        await createView(req.body);

        res.status(200).json({})
    } catch (err) {
        console.error("Ошибка при создании вида: " + err.message);
	    console.error(err);
        res.status(400).json({message: err.message});
    }
}

export {
    get,
    create
};
