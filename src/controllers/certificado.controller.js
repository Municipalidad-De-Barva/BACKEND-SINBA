import daoPatentes from "../database/DaoSolicitud_Patente";
const patentes = new daoPatentes();

export const certificadoPatenteComercialNueva = async (req, res) => {
  let id = req.body.id;
  patentes.obtener_datos_para_certificado(id, function (params) {
    res.status(200).json(params[0]);
  });
};
