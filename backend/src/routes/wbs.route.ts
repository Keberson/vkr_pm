import {Router} from "express";
import {create, delete_, get, edit} from "../controllers/wbs.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get('', get);
router.post('', create);
router.delete('/:id', delete_);
router.put('/:id', edit);

export default router;
