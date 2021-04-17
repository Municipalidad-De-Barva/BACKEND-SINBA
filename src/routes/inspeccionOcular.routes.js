import {Router} from "express";
const router = Router();
import * as insOcularCtrl from "../controllers/inspeccionOcular.contoller";

router.get("/listar", insOcularCtrl.Obtener_Inspeccion_Ocular);
export default router;

router.post("/insertar", insOcularCtrl.insertar_Inspeccion_Ocular);
