import daoInspeOcular from "../database/Dao_Inspeccion_Ocular";
const inspeOcular = new daoInspeOcular();

export const listar_Inspecciones_Oculares = async (req, res) => {};

export const insertar_Inspeccion_Ocular = async (req, res) => {
  console.log(req.body);
  const {
    // Datos de la inpeccion ocular
    FK_Inspeccion_Patente_Nueva, //Corresponde al código (LLave Primaria) de la tabla inspeccion_patente_nueva;
    //Lugar_Visita,
    Lugar,
    Fecha,
    Diligencia,
    Resultado,
    // Datos del testigo #1
    FK_Testigo1,
    //Nombre_Completo_Testigo1,
    //Telefono_Testigo1,
    Tel_Testigo1,
    Correo_Testigo1,
    //firma_testigo1,
    //Datos del testigo #2
    FK_Testigo2,
    //Nombre_Completo_Testigo2,
    Tel_Testigo2,
    Correo_Testigo2,
    //firma_testigo2,
  } = req.body;

  inspeOcular.insertar_Inspeccion_Ocular(
    FK_Inspeccion_Patente_Nueva,
    Lugar,
    Fecha,
    Diligencia,
    Resultado,
    FK_Testigo1,
    //Nombre_Completo_Testigo1,
    Tel_Testigo1,
    Correo_Testigo1,
    //firma_testigo1,
    FK_Testigo2,
    //Nombre_Completo_Testigo2,
    Tel_Testigo2,
    Correo_Testigo2,
    //firma_testigo2,
    function (result) {
      return res.status(200).json(result);
    }
  );
};
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
