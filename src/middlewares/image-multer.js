//import config from "../config/config";
import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid";
uuidv4();
export const init = multer({
  dest: path.join(__dirname, "../public/uploads"),
  fileFilter: function (req, file, cb) {
    var filetypes = /jpeg|jpg|png|gif/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      "Error: File upload only supports the following filetypes - " + filetypes
    );
  },
  limits: {fileSize: 1000000},
}).single("image");

export const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

export const mu = multer({storage}).single("image");
