import {Router} from "express";
import {create, get} from "../controllers/activity.controller";

const router = Router();

router.get('/:id', get);
router.post('/', create);

export default router;
