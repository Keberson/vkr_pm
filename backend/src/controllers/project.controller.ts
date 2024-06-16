import {Request, Response} from "express";
import {verify} from "jsonwebtoken";

import {createProject, getProjects} from "../services/project.service";
import jwt from "../configs/jwt.config";
import {ICreatProject} from "../models/IProject";


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

const create = async (req: Request, res: Response) => {
    try {
        const verifyRes = verify(req.headers.authorization.split(" ")[1], jwt);

        if (typeof verifyRes !== "string") {
            const project: ICreatProject = {
                name: req.body.name,
                owner: verifyRes['id'],
                description: req.body.description,
                date_start_plan: "-infinity",
                date_finish_plan: "-infinity",
                date_start_actual: "-infinity",
                date_finish_actual: "-infinity",
            };

            await createProject(project);
        }

        res.status(200).json({})
    } catch (err) {
        console.error("Ошибка при создании проекта: " + err.message);
        res.status(400).json({message: err.message});
    }
}


export {
    get, create
};
