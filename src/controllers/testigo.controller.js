import daoTestigo from "../database/Dao_Testigo";
const testigo = new daoTestigo();

export const obtener_Testigo = async (req, res) => {
  const {PK_ID} = req.body;

  testigo.obtener_Testigo(PK_ID, function (result) {
    if (typeof result !== "undefined" && result !== null && result === "") {
      return res.status(200).json({testigo: result});
    }
    return res.status(500).json({error: "Testigo no existe"});
  });
};

export const insertar_Testigo = async (req, res) => {
  const {PK_ID, Nombre_Completo, Telefono, Correo, Firma} = req.body;

  testigo.insertar_Testigo(
    PK_ID,
    Nombre_Completo,
    Telefono,
    Correo,
    Firma,
    function (result) {
      if (result === "Se ingreso nuevo testigo") {
        return res.status(200).json(result);
      }
      return res.status(500).json(result);
    }
  );
};

export const listar_Testigos = async (req, res) => {
  testigo.listar_Testigos(function (result) {
    return res.status(200).json({listaTestigo: result});
  });
};

export const insertar_Firma_Testigo = async (req, res) => {
  // testigo.insertar_Firma_Testigo(PK_ID, img function(resutl){
  //  return res.status.json("agregado");
  // });
};
