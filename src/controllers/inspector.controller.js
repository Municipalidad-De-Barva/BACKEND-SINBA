import daoInspector from "../database/Dao_Inspeccion_Patente_Nueva";
const inspector = new daoInspector();

export const listarInspecciones = async (req, res) => {
  inspector.listar_Inspecciones_Patentes_Nuevas(function (result) {
    if (typeof result !== "undefined" && result !== null) {
      return res.status(200).json({list: result});
    }
    return res.status(500).json({error: "no se logro listar"});
  });

  return null;
};
