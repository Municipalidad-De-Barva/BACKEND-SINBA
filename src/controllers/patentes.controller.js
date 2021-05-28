import daoPatentes from "../database/Dao_Patente";

const patentes = new daoPatentes();

export const insertarPatentes = async (req, res) => {
  const {
    Patente_Comercial,
    Distrito,
    Ced_Jur_Fis,
    Solicitante,
    Actividad,
    Nombre_Local,
    Direccion,
  } = req.body;
  patentes.insertar_patentes(
    Patente_Comercial,

    Distrito,
    Ced_Jur_Fis,
    Solicitante,
    Actividad,
    Nombre_Local,
    Direccion,
    function (params) {
      res.status(200).json({message: params});
    }
  );
};

export const listarPatentes = async (req, res) => {
  patentes.listar_Patentes(function (result) {
    res.status(200).json(result);
  });
};

export const recuperarPatentes = async (req, res) => {
  let id = req.body.Numero_Patente;
  patentes.obtener_patentes(id, function (result) {
    res.status(200).json(result);
  });
};
