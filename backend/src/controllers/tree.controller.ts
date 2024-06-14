import {Request, Response} from "express";

import {getTree} from "../services/tree.service";

const get = async (req: Request, res: Response) => {
    try {
        const result = await getTree(Number(req.params.id), Number(req.query.view));

        res.status(200).json({ result })
    } catch (err) {
        console.error("Ошибка при получении дерева: " + err.message);
        console.error(err);
        res.status(400).json({message: err.message});
    }
}

export {
    get
};
