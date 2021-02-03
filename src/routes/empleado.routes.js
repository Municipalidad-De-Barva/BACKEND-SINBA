import {Router} from "express";
const router = Router();
import * as empleadoCtrl from "../controllers/empleado.controller";

router.post("/crearEmpleado", empleadoCtrl.crearUsuario);

export default router;
