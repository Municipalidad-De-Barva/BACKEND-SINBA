import jwt from "jsonwebtoken";
import config from "../config/config";
import User from "../models/User";

import daoAdministrativo from "../database/DaoAdministrativo";
const administrativo = new daoAdministrativo();

export const signUp = async (req, res) => {
  return res.status(400).json({message: "signUp"});
};

export const signIn = async (req, res) => {
  const {user, pass} = req.body;

  //Método para obtener de  la bases de datos al empleado correspondiente.
  administrativo.obtener_Administrativo_Clave(user, pass, function (result) {
    if (result != null && result !== "undefined") {
      console.log(" Imprimiendo los datos del empleado: ", result); //creando token
      const token = jwt.sign({id: user}, config.SECRETKEY, {
        expiresIn: 60 * 5, //token es valido por cinco minutos
      });
      console.log(token);
      res.status(200).json({auth: true, token});
    } else {
      res.status(500).json({error: "Datos erroneos"});
    }
  });
};

export const signOut = async (req, res) => {
  return res.status(400).json({message: "signOut"});
};
