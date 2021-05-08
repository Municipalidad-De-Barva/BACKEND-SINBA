import daoInspector from "../database/Dao_Inspeccion_Patente_Nueva";
const inspector = new daoInspector();

export const obtenerNumero = async (req, res) => {
  inspector.obtener_ultima_inspeccion_patente_(function (result) {
    console.log(result[0].PK_Codigo_Inspeccion);
    return res.status(200).json(result[0]);
  });
};

export const listar_Inspecciones_Patentes_Nuevas = async (req, res) => {
  inspector.listar_Inspecciones_Patentes_Nuevas(function (result) {
    if (typeof result !== "undefined" && result !== null) {
      return res.status(200).json({list: result});
    }
    return res.status(500).json({error: "no se logro listar"});
  });

  return null;
};

export const obtener_inspeccion_patente_nueva_codigo = async (req, res) => {
  console.log(req.body);

  const {PK_Codigo_Inspeccion} = req.body;
  inspector.obtener_inspeccion_patente_nueva_codigo(
    PK_Codigo_Inspeccion,
    function (result) {
      res.status(200).json(result);
    }
  );
};

export const actualizar_Datos_Inspeccion_Patente_Nueva = async (req, res) => {
  const {
    Descripcion,
    Local,
    Direccion,
    Requisito_Local_Acorde_Actividadl,
    Planta_Fisica,
    Senalizacion,
    Luces_Emergencias,
    Extintor,
    Salida_Emergencia,
    PK_Codigo_Inspeccion,
  } = req.body;

  inspector.actualizar_Datos_Inspeccion_Patente_Nueva(
    Descripcion,
    Local,
    Direccion,
    Requisito_Local_Acorde_Actividadl,
    Planta_Fisica,
    Senalizacion,
    Luces_Emergencias,
    Extintor,
    Salida_Emergencia,
    PK_Codigo_Inspeccion,

    function (result) {
      console.log("result", result);
      res.status(200).json("actualizado");
    }
  );
};
