import config from "../config/config";
import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid";
uuidv4();
import daoInspeOcular from "../database/Dao_Inspeccion_Ocular";
const inspeOcular = new daoInspeOcular();

export const storage = multer.diskStorage({
  destination: path.join(__dirname, config.RUTA_FIRMA_TESTIGO),
  filename: (req, file, cb) => {
    cb(null, uuidv4().v4 + path.extname(file.originalname));
  },
});

export const Upload = multer({
  dest: path.join(__dirname, config.RUTA_INSPECCION_NUEVA),
  fileFilter: function (req, file, cb) {
    var filetypes = /jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      "Error: File upload only supports the following filetypes - " + filetypes
    );
  },
  limits: {fileSize: 10000000},
}).array("firmas", 2);

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
