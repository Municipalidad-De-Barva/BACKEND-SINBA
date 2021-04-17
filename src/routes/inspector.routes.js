import {Router} from "express";
const router = Router();
import {auth} from "../middlewares";
import * as inspectorCtrl from "../controllers/inspector.controller";
router.get("/listar", inspectorCtrl.listar_Inspecciones_Patentes_Nuevas);

router.get("/obtener", inspectorCtrl.obtener_inspeccion_patente_nueva_codigo);

router.get("/obtenerNumero", inspectorCtrl.obtenerNumero);

router.post("/agregar", inspectorCtrl.insertar_Inspecciones_Patentes_Nuevas);

router.put(
  "/actualizar",
  inspectorCtrl.actualizar_Datos_Inspeccion_Patente_Nueva
);
export default router;
