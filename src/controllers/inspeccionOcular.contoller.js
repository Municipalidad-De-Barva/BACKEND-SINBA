import daoInspeOcular from "../database/Dao_Inspeccion_Ocular";
const inspeOcular = new daoInspeOcular();

export const Obtener_Inspeccion_Ocular = async (req, res) => {
  const {PK_Codigo_Inspeccion} = req.body;

  inspeOcular.Obtener_Inspeccion_Ocular(PK_Codigo_Inspeccion, function (
    result
  ) {
    return res.status(200).json(result);
  });
};
export const actualizar_Datos_Inspeccion_Ocular = async (req, res) => {
  const {
    FK_Inspeccion_Patente_Nueva,
    Lugar_Visita,
    Fecha,
    Diligencia,
    Resultado,
    FK_Testigo1,
    FK_Testigo2,
    PK_Codigo_Inspeccion,
  } = req.body;

  inspeOcular.actualizar_Datos_Inspeccion_Ocular(
    FK_Inspeccion_Patente_Nueva,
    Lugar_Visita,
    Fecha,
    Diligencia,
    Resultado,
    FK_Testigo1,
    FK_Testigo2,
    PK_Codigo_Inspeccion,
    function (result) {
      return res.status(200).json(result);
    }
  );
};
