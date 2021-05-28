import {Router} from "express";
const router = Router();
import * as patentes from "../controllers/patentes.controller";
router.get("/listarPatentes", patentes.listarPatentes);
router.post("/insertarPatentes", patentes.insertarPatentes);
router.post("/obtenerPatentes", patentes.recuperarPatentes);
export default router;
