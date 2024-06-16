import {Router} from "express";

import {create, get} from "../controllers/project.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get('', get);
router.post('', create);

export default router;
