import jwt from "jsonwebtoken";
import config from "../config/config";

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
  let token = req.headers["x-access-token"];
  console.log("mostrando token antes de destruirlo", token);
  jwt.destroy(token);
  console.log("mostrando token despues de destruirlo", token);
  return res.status(200).json({message: "signOut"});
};
