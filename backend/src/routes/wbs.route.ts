import {Router} from "express";
import {create, delete_, get} from "../controllers/wbs.controller";

const router = Router();

router.get('', get);
router.post('', create);
router.delete('/:id', delete_);

export default router;
