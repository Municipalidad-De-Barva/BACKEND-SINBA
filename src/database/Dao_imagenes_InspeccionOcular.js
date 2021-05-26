import dao from "./Dao";
const util = require("util");
export default class Dao_imagenes_InspeccionOcular extends dao {
  constructor() {
    super();
  }

  async insertarImagenesInpeccionOcular(Codigo_Inpeccion_Ocular, URL_Imagen) {
    const query = util.promisify(this.connection.query).bind(this.connection);

    const rows = await query("INSERT INTO imagenes_inpeccion SET ?", {
      Codigo_Inpeccion_Ocular,
      URL_Imagen,
    });

    console.log("rows", rows);

    return "imagen insertada";
  }

  async obtenerImagenes(Codigo_Inpeccion_Ocular) {
    const query = util.promisify(this.connection.query).bind(this.connection);

    const rows = await query(
      "SELECT * FROM imagenes_inpeccion where Codigo_Inpeccion_Ocular=?",
      Codigo_Inpeccion_Ocular
    );

    this.desconectar;

    return rows;
  }
}
