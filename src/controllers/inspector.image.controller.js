import config from "../config/config";
import multer from "multer";
import path from "path";

import daoInspector from "../database/Dao_Inspeccion_Patente_Nueva";
const inspector = new daoInspector();

export const storage = multer.diskStorage({
  destination: path.join(__dirname, config.RUTA_INSPECCION_NUEVA),
  filename: (req, file, cb) => {
    const img = req.file.filename + path.extname(req.file.originalname);
    cb(null, +img);
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

export const insertar_imagen = async (req, res) => {
  Upload(req, res, (err) => {
    if (err) {
      err.message = "The file is so heavy for my service";
      return res.send(err);
    }

    const img =
      "/inspeccionNueva/" +
      req.file.filename +
      path.extname(req.file.originalname);
    console.log("ruta de la imagen", img);
    res.send("imagen agregada inspeccion");
  });
};
