export const insertarPatentes = async (req, res) => {
  const {id} = req.body;

  res.status(200).json({message: "Se a insertado la patente"});
};

export const listarPatentes = async (req, res) => {
  let result = "listar patentes";
  res.status(200).json(result);
};

export const recuperarPatentes = async (req, res) => {
  let id = req.body.id;

  let result = "Recuperar patentes";
  res.status(200).json(result);
};
