import {Router} from "express";
const router = Router();
import * as insOcularCtrl from "../controllers/inspeccionOcular.contoller";

router.get("/listar", insOcularCtrl.Obtener_Inspeccion_Ocular);

router.post("/insertar", insOcularCtrl.insertar_Inspeccion_Ocular);

router.put("/actualizar", insOcularCtrl.actualizar_Datos_Inspeccion_Ocular);

export default router;
