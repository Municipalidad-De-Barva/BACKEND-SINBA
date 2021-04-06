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
    let usuario = result[0];
    if (result.length === 0)
      res.status(500).json({error: "El Usuario NO Existe"});
    else {
      console.log(" Imprimiendo los datos del empleado: ", usuario); //creando token
      const token = jwt.sign({id: usuario.PK_ID}, config.SECRETKEY, {
        expiresIn: config.TIME, //token es valido por cinco minutos
      });
      console.log(token);
      let sendType = usuario.FK_Rol; //para filtrado de opciones
      res.status(200).json({auth: true, token, sendType});
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
