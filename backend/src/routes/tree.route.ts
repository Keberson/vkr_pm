import {Router} from "express";
import {get} from "../controllers/tree.controller";

const router = Router();

router.get('/:id', get);

export default router;
