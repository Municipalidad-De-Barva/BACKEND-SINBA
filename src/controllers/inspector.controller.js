import daoInspector from "../database/Dao_Inspeccion_Patente_Nueva";
const inspector = new daoInspector();

export const listar_Inspecciones_Patentes_Nuevas = async (req, res) => {
  inspector.listar_Inspecciones_Patentes_Nuevas(function (result) {
    if (typeof result !== "undefined" && result !== null) {
      return res.status(200).json({list: result});
    }
    return res.status(500).json({error: "no se logro listar"});
  });

  return null;
};

export const insertar_Inspecciones_Patentes_Nuevas = async (req, res) => {
  const {
    FK_Inspector_Administrativo,
    FK_Solicitud_Patente,
    Descripcion,
    Local,
    Direccion,
    Requisito_Local_Acorde_Actividadl,
    Planta_Fisica,
    Senalizacion,
    Luces_Emergencias,
    Extintor,
    Salida_Emergencia,
  } = req.body;

  inspector.insertar_Inspecciones_Patentes_Nuevas(
    FK_Inspector_Administrativo,
    FK_Solicitud_Patente,
    Descripcion,
    Local,
    Direccion,
    Requisito_Local_Acorde_Actividadl,
    Planta_Fisica,
    Senalizacion,
    Luces_Emergencias,
    Extintor,
    Salida_Emergencia,

    function (result) {
      console.log("Result:", result);
      res.status(200).json(result);
    }
  );
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
