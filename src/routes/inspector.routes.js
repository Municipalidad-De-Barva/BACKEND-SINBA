import {Router} from "express";
const router = Router();
import {auth} from "../middlewares";
import * as inspectorCtrl from "../controllers/inspector.controller";
router.get(
  "/listar",
  auth.verifyToken,
  inspectorCtrl.listar_Inspecciones_Patentes_Nuevas
);

router.get(
  "/obtener",
  auth.verifyToken,
  inspectorCtrl.obtener_inspeccion_patente_nueva_codigo
);

router.post(
  "/agregar",
  auth.verifyToken,
  inspectorCtrl.insertar_Inspecciones_Patentes_Nuevas
);

export default router;
