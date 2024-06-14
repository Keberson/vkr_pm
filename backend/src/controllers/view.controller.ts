import {Request, Response} from "express";
import {getViewByProject} from "../services/view.service";

const get = async (req: Request, res: Response) => {
    try {
        const result = await getViewByProject(Number(req.params.id));

        res.status(200).json({ result })
    } catch (err) {
        console.error("Ошибка при получении работ: " + err.message);
        res.status(400).json({message: err.message});
    }
}

export {
    get
};
