import {Router} from "express";
import {get, create} from "../controllers/view.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get('/:id', get);
router.post('/', create);

export default router;
