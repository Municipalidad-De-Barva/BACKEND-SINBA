import {Router} from "express";
const router = Router();

import daoAdministrativo from "../database/DaoAdministrativo";
let administrativo = new daoAdministrativo();

import Joi from "@hapi/joi";

const schema = Joi.object({
  user: Joi.string().min(9).required(),
  pass: Joi.string().min(6).required().max(256),
  name: Joi.string().min(10).required(),
  rol: Joi.string().min(1).required().max(1),
  email: Joi.string().min(6).required().email(),
  Tipo_Identificacion: Joi.string().min(1).required().max(1),
});

router.post("/", (req, res) => {
  const {error} = schema.validate(req.body);
  if (error) {
    res.status(500).send(error.details[0].message);
    console.log(error.details[0].message);
  } else {
    const {user, pass, name, rol, email, Tipo_Identificacion} = req.body;

    administrativo.insertar_Administrativo(
      user,
      "Administrador",
      name,
      rol,
      email,
      pass,
      Tipo_Identificacion,
      function (result) {
        console.log(" Resultado de insertar al usuario: ");
        console.log(result);
      }
    );

    console.log(user, pass, name, rol, email);
    res.json("ok");
  }
});

export default router;
