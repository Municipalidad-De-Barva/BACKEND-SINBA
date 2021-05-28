import {Router} from "express";
const router = Router();
import * as empleadoCtrl from "../controllers/empleado.controller";
import {auth} from "../middlewares";

router.post("/crearEmpleado", empleadoCtrl.crearUsuario);

router.put("/recuperarCuenta", empleadoCtrl.recuperarUsuario);

export default router;
