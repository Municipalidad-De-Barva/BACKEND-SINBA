import jwt from "jsonwebtoken";
import config from "../config/config";

//verificarToken es un middleware para comprobar si el token es valido, esto lo comprueba cada ves que ingresa a una nueva ruta.
export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (typeof token === "undefined") {
    console.warn("No token provided");
    return res.status(403).json({message: "No token provided"});
  }
  try {
    const decoded = jwt.verify(token, config.SECRETKEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.warn("Unauthorized");
    return res.status(401).json({message: "Unauthorized!"});
  }
};
