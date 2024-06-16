import {Router} from "express";
import {create, delete_, get} from "../controllers/wbs.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get('', get);
router.post('', create);
router.delete('/:id', delete_);

export default router;
