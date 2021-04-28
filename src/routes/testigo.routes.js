import {Router} from "express";
const router = Router();
import {auth} from "../middlewares";
import * as testigoCtrl from "../controllers/testigo.controller";
router.post("/obtenerTestigo", testigoCtrl.obtener_Testigo);

router.post("/insertarTestigo", testigoCtrl.insertar_Testigo);

router.get("/listarTestigos", testigoCtrl.listar_Testigos);

export default router;
