import {Router} from "express";
import {get, create} from "../controllers/view.controller";

const router = Router();

router.get('/:id', get);
router.post('/', create);

export default router;
