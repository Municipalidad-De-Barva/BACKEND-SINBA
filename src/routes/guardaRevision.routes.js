const {Router} = require("express");
const router = Router();
import DaoSolicitud_Patente from "../database/DaoSolicitud_Patente";
const soli = new DaoSolicitud_Patente();
import Joi from "@hapi/joi";

const schema = Joi.object({
  codigoSolicitud: Joi.number().min(1).required(),
  notInfoForm: Joi.string().min(1).required(),
  insCCSS: Joi.string().min(1).required(),
  insFODESAF: Joi.string().min(1).required(),
  exonePoliRiesgo: Joi.string().min(1).required(),
  declJura: Joi.string().min(1).required(),
  timbFisc: Joi.string().min(1).required(),
  impuMunic: Joi.string().min(1).required(),
});

router.post("/", (req, res) => {
  console.log(req.body);

  const {error} = schema.validate(req.body);
  if (error) {
    res.status(500).send(error.details[0].message);
    console.log(error.details[0].message);
  } else {
    const {
      codigoSolicitud,
      notInfoForm,
      insCCSS,
      insFODESAF,
      exonePoliRiesgo,
      declJura,
      timbFisc,
      impuMunic,
    } = req.body;
    let completado = "Pendiente";
    console.log(req.body);
    if (
      notInfoForm === "1" &&
      insCCSS === "1" &&
      insFODESAF === "1" &&
      exonePoliRiesgo === "1" &&
      declJura === "1" &&
      timbFisc === "1" &&
      impuMunic === "1"
    ) {
      completado = "Terminado";
    }
    soli.actualizar_Datos_Revision(
      codigoSolicitud,
      notInfoForm,
      insCCSS,
      insFODESAF,
      exonePoliRiesgo,
      timbFisc,
      "0",
      declJura,
      impuMunic,
      "0",
      completado,
      function (result) {
        console.log(" Resultado de insertar al usuario: ");
        console.log(result);
        res.json("ok");
      }
    );
  }
});

export default router;
