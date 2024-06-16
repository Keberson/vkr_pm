import {Request, Response} from "express";

import {createActivity, deleteActivity, editActivity, getActivitiesByProject} from "../services/activity.service";

const get = async (req: Request, res: Response) => {
    try {
        const result = await getActivitiesByProject(Number(req.params.id));

        res.status(200).json({ result })
    } catch (err) {
        console.error("Ошибка при получении работ: " + err.message);
        res.status(400).json({message: err.message});
    }
}

const create = async (req: Request, res: Response) => {
    try {
        await createActivity(req.body);

        res.status(200).json({});
    } catch (err) {
        console.error("Ошибка при создании работы: " + err.message);
        res.status(400).json({message: err.message});
    }
}

const delete_ = async (req: Request, res: Response) => {
    try {
        await deleteActivity(Number(req.params.id));

        res.status(200).json({});
    } catch (err) {
        console.error("Ошибка при удалении работы: " + err.message);
        res.status(400).json({message: err.message});
    }
}

const edit = async (req: Request, res: Response) => {
    try {
        await editActivity(Number(req.params.id), req.body);

        res.status(200).json({});
    } catch (err) {
        console.error("Ошибка при изменении работы: " + err.message);
        res.status(400).json({message: err.message});
    }
}

export {
    get,
    create,
    delete_,
    edit
};
