import {Router} from "express";
import {create, get} from "../controllers/wbs.controller";

const router = Router();

router.get('/:id', get);
router.post('/', create);
export default router;
