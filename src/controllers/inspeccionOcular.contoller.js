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

export const obtener_ocu = async (req, res) => {
  const {PK_ID} = req.body;
  let result = await inspeOcular.obtener_ocu(PK_ID);
  return res.status(200).json(result);
};

export const listar_Inspecciones_Oculares = async (req, res) => {
  let result = await inspeOcular.listar_Inspecciones_Oculares();
  return res.status(200).json(result);
};

export const Obtener_Inspeccion_Ocular_Por_ID_Con_Objetos = async (
  req,
  res
) => {
  const {PK_Codigo_Inspeccion} = req.body;
  console.log(PK_Codigo_Inspeccion);
  async function run() {
    let result = await inspeOcular.Obtener_Inspeccion_Ocular_Por_ID_Con_Objetos(
      PK_Codigo_Inspeccion
    );
    return res.status(200).json(result);
  }
  run();
};

export const insertar_Inspeccion_Ocular = async (req, res) => {
  const {
    FK_Inspeccion_Patente_Nueva,
    Lugar_Visita,
    Fecha,
    Diligencia,
    Resultado,
    // Datos del testigo #1
    FK_Testigo1,
    Telefono_Testigo1,
    Correo_Testigo1,
    firma_testigo1,
    //Datos del testigo #2
    FK_Testigo2,
    Telefono_Testigo2,
    Correo_Testigo2,
    firma_testigo2,
  } = req.body;

  inspeOcular.insertar_Inspeccion_Ocular(
    FK_Inspeccion_Patente_Nueva,
    Lugar_Visita,
    Fecha,
    Diligencia,
    Resultado,
    // Datos del testigo #1
    FK_Testigo1,
    Telefono_Testigo1,
    Correo_Testigo1,
    firma_testigo1,
    //Datos del testigo #2
    FK_Testigo2,
    Telefono_Testigo2,
    Correo_Testigo2,
    firma_testigo2,
    function (result) {
      return res.status(200).json(result);
    }
  );
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

export const Cambiar_Estado_Inspeccion_Ocular = async (req, res) => {
  const {ID_OCULAR, ESTADO} = req.body;
  inspeOcular.Cambiar_Estado_Inspeccion_Ocular(ID_OCULAR, ESTADO);
  return res.status(200).text("El Estado se ha cambiado");
};

export const obtener_contribuyente_ocular = async (req, res) => {
  const {PK_Codigo_Inspeccion} = req.body;
  let result = await inspeOcular.obtener_contribuyente_ocular(
    PK_Codigo_Inspeccion
  );
  return res.status(200).json(result);
};
