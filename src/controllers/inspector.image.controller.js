import config from "../config/config";
import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid";
let nombreAleatorio;
import daoImagenInspecionOcular from "../database/Dao_imagenes_InspeccionOcular";
import {array} from "@hapi/joi";
const imgInspOcular = new daoImagenInspecionOcular();

export const storage = multer.diskStorage({
  destination: path.join(__dirname, config.RUTA_INSPECCION_NUEVA),
  filename: (req, file, cb) => {
    const img = (nombreAleatorio = uuidv4() + path.extname(file.originalname));

    cb(null, img);
  },
});

export const Upload = multer({
  storage,
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
  //limits: {fileSize: 1000000},
}).single("userpic");

export const insertar_imagen = async (req, res) => {
  Upload(req, res, (err) => {
    if (err) {
      err.message = "The file is so heavy for my service";
      return res.send(err);
    }
    console.log(req.body);
    const img = "/inspeccionNueva/" + nombreAleatorio;

    let r = imgInspOcular.insertarImagenesInpeccionOcular(req.body.Codigo, img);

    res.send(r);
  });
};

export const obtenerListaImagenes = async (req, res) => {
  const {Codigo} = req.body;  
  console.log("MI DATA"+Codigo);
  let r = await imgInspOcular.obtenerImagenes(req.body.Codigo);

  console.log("r: ", r);
  res.status(200).json(r);
};
