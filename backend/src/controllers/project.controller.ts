import {Request, Response} from "express";
import {verify} from "jsonwebtoken";

import {getProjects} from "../services/project.service";
import jwt from "../configs/jwt.config";


const get = async (req: Request, res: Response) => {
    try {
        const verifyRes = verify(req.headers.authorization.split(" ")[1], jwt);
        let result = [];

        if (typeof verifyRes !== "string") {
            result = await getProjects(verifyRes['id'], verifyRes['id_role']);
        }

        res.status(200).json({ result })
    } catch (err) {
        console.error("Ошибка при получении проектов: " + err.message);
        res.status(400).json({message: err.message});
    }
}


export {
    get,
};
