import {Router} from "express";
import {editStatus} from "../controllers/activity.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.put('/:id', editStatus);

export default router;
