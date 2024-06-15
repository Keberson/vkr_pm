import {Router} from "express";
import {create, delete_, get} from "../controllers/activity.controller";

const router = Router();

router.get('/:id', get);
router.post('', create);
router.delete('/:id', delete_);

export default router;
