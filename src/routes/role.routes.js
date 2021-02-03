import {Router} from "express";
const router = Router();

import * as roleCtrl from "../controllers/role.controller";
router.get("/list", roleCtrl.list);

export default router;
