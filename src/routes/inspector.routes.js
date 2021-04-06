import {Router} from "express";
const router = Router();
import {auth} from "../middlewares";
import * as inspectorCtrl from "../controllers/inspector.controller";
router.post("/listar", auth.verifyToken, inspectorCtrl.listarInspecciones);

export default router;
