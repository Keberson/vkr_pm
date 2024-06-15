import {Router} from "express";
import {create, get} from "../controllers/wbs.controller";

const router = Router();

router.get('', get);
router.post('/', create);

export default router;
