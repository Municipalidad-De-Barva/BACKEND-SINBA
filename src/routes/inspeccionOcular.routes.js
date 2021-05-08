import {Router} from "express";
const router = Router();
import * as insOcularCtrl from "../controllers/inspeccionOcular.contoller";
import * as insOcularCtrlImg from "../controllers/inspectorOcularFIrmas.image.controller";

router.get("/listar", insOcularCtrl.Obtener_Inspeccion_Ocular);

router.post("/insertar", insOcularCtrlImg.insertar_Inspeccion_Ocular);

router.put("/actualizar", insOcularCtrl.actualizar_Datos_Inspeccion_Ocular);

router.put("/cambiarEstado", insOcularCtrl.Cambiar_Estado_Inspeccion_Ocular);

router.post(
  "/obtenerInspeccionOcularId",
  insOcularCtrl.Obtener_Inspeccion_Ocular_Por_ID_Con_Objetos
);

router.get(
  "/listarInspeccionesOculares",
  insOcularCtrl.listar_Inspecciones_Oculares
);

router.post("/obtenerOcu", insOcularCtrl.obtener_ocu);

router.post(
  "/obtenerContribuyenteOcular",
  insOcularCtrl.obtener_contribuyente_ocular
);
export default router;
