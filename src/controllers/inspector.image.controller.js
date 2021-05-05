import config from "../config/config";
import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid";
uuidv4();
import daoInspector from "../database/Dao_Inspeccion_Patente_Nueva";
const inspector = new daoInspector();

export const storage = multer.diskStorage({
  destination: path.join(__dirname, config.RUTA_INSPECCION_NUEVA),
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
}).single("image");

export const insertar_Inspecciones_Patentes_Nuevas = async (req, res) => {
  Upload(req, res, (err) => {
    if (err) {
      err.message = "The file is so heavy for my service";
      return res.send(err);
    }

    res.send("uploaded");

    const {
      FK_Inspector_Administrativo,
      FK_Solicitud_Patente,
      Descripcion,
      Local,
      Direccion,
      Requisito_Local_Acorde_Actividad,
      Planta_Fisica,
      Senalizacion,
      Luces_Emergencias,
      Extintor,
      Salida_Emergencia,
    } = req.body;
    const Firma =
      "/inspeccionNueva/" +
      req.file.filename +
      path.extname(req.file.originalname);
    console.log(Firma);
    inspector.insertar_Inspecciones_Patentes_Nuevas(
      FK_Inspector_Administrativo,
      FK_Solicitud_Patente,
      Descripcion,
      Local,
      Direccion,
      Requisito_Local_Acorde_Actividad,
      Planta_Fisica,
      Senalizacion,
      Luces_Emergencias,
      Extintor,
      Salida_Emergencia,

      function (result) {
        inspector.obtener_ultima_inspeccion_patente_(function (result) {
          console.log(result[0].PK_Codigo_Inspeccion);
          return res.status(200).json(result[0]);
        });
      }
    );
  });
};
