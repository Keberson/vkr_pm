import {Request, Response} from "express";
import {JwtPayload, verify} from "jsonwebtoken";

import jwt from "../configs/jwt.config";
import {getRoleName, getUserData} from "../services/users.service";

const authMiddleware = async (req: Request, res: Response, next: () => void) => {
    if (!('authorization' in req.headers)) {
        res.status(401).json();

        return;
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        res.status(401).json({});

        return;
    }

    let isOk: boolean;
    let verifyRes: string | JwtPayload;

    try {
        verifyRes = verify(token, jwt);

        isOk = typeof verifyRes !== "string";
    } catch (e) {
        isOk = false;
    }

    if (!isOk) {
        res.status(401).json({});

        return;
    }

    const id = verifyRes['id'];
    const idRole = verifyRes['id_role'];

    const role = await getRoleName(idRole);
    const userData = await getUserData(id);

    if (!role || !userData) {
        res.status(401).json({});

        return;
    }

    next();
};

export default authMiddleware;