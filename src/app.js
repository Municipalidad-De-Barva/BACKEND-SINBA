import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import config from "./config/config";
import pkg from "../package.json";

// herramientas para cargar imagenes
const path = require("path");
//settings express
const app = express();
app.set("port", config.PORTBACKEND);
app.set("json spaces", 2);
app.set("pkg", pkg);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//settings cors
const whitelist = [
  `http://localhost:${config.PORTFRONTEND}`,
  "http://localhost:8080",
];

const corsOptions = {
  //no eliminar
  /*origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },*/
};

app.use(cors(corsOptions));

app.use(helmet());

// Static files acceder a las imagenes por una url
app.use(express.static(path.join(__dirname, config.RUTA_PUBLICA_IMAGENES)));

//routes
import nuevoFormulario from "./routes/nuevoFormulario.routes";
import auth from "./routes/auth.routes";
import empleado from "./routes/empleado.routes";
import todoFormularios from "./routes/todoFormularios.routes";
import guardaRevision from "./routes/guardaRevision.routes";
import role from "./routes/role.routes";
import inspector from "./routes/inspector.routes";
import testigo from "./routes/testigo.routes";
import insOcular from "./routes/inspeccionOcular.routes";
//rutas
app.get("/", cors(corsOptions), function (req, res, next) {
  res.json({
    msg: "This is CORS-enabled for a whitelisted domain.",
    whitelist,
    Tittle: "Sistema de Patentes Municipalidad de Barva de Heredia.",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
  next();
});
app.use("/api/nuevoForm", nuevoFormulario);
app.use("/api/auth", auth);
app.use("/api/empleado", empleado);
app.use("/api/allNForms", todoFormularios);
app.use("/api/EspForm", todoFormularios);
app.use("/api/revision", guardaRevision);

app.use("/api/role", role);

//Inspector API
app.use("/api/inspector", inspector);
app.use("/api/testigo", testigo);
app.use("/api/inspOcular", insOcular);

export default app;
