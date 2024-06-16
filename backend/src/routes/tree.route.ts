import {Router} from "express";
import {get} from "../controllers/tree.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get('/:id', get);

export default router;
