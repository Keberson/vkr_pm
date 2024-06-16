import {Router} from "express";

import {get} from "../controllers/project.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get('', get);

export default router;
