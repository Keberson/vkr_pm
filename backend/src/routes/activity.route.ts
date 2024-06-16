import {Router} from "express";
import {create, delete_, get} from "../controllers/activity.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get('/:id', get);
router.post('', create);
router.delete('/:id', delete_);

export default router;
