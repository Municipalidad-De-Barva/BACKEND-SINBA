import DaoSolicitudPatente from "../database/DaoSolicitud_Patente";
const solicitudPatente = new DaoSolicitudPatente();

export const certificadoPatenteComercialNueva = async (req, res) => {
  let id = req.body.PK_Codigo_Inspeccion;
  console.log("id certificado", id);
  solicitudPatente.obtener_datos_para_certificado(id, function (params) {
    res.status(200).json(params[0]);
  });
};
