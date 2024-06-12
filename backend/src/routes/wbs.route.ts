import {Router} from "express";
import {create} from "../controllers/wbs.controller";

const router = Router();

router.post('/', create);
export default router;
