import {Router} from "express";
const router = Router();
import * as certificado from "../controllers/certificado.controller";
router.post("/patenteNueva", certificado.certificadoPatenteComercialNueva);

export default router;
