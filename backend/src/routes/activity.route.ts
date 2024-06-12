import {Router} from "express";
import {create} from "../controllers/activity.controller";

const router = Router();

router.post('/', create);

export default router;
