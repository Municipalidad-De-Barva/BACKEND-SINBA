import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
//creando un token cuando inicie la seccion el token se guardara en el localstorage
router.post("/signin",authCtrl.signIn );

module.exports = router;
