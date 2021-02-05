import jwt from "jsonwebtoken";
import config from "../config/config";

//verificarToken es un middleware para comprobar si el token es valido, esto lo comprueba cada ves que ingresa a una nueva ruta.
export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({message: "No token provided"});

  try {
    const decoded = jwt.verify(token, config.SECRETKEY);
    req.userId = decoded.id;

    //crear un metodo consultar a la base de datos para obtener el usuario
    //const user = await User.findById(req.userId, { password: 0 });
    //if (!user) return res.status(404).json({ message: "No user found" });

    next();
  } catch (error) {
    return res.status(401).json({message: "Unauthorized!"});
  }
};
