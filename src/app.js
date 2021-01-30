import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import config from "./config/config";
import pkg from "../package.json";

//settings express
const app = express();
app.set("port", config.port);
app.set("json spaces", 2);
app.set("pkg", pkg);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//settings cors
const whitelist = [
  `http://localhost:${config.portFrontEnd}`,
  "http://localhost:8080",
];

const corsOptions = {
  origin: "*",
  //no eliminar
  /*origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },*/
};

app.get("/", cors(corsOptions), function (req, res, next) {
  res.json({
    msg: "This is CORS-enabled for a whitelisted domain.",
    Tittle: "Sistema de Patentes MUnicipalidad de Barva de Heredia.",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});

app.use(cors(corsOptions));
/*
app.use((req, res, next) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  });
  next();
});
*/

app.use(helmet());

//routes
app.use("/api", require("./routes/index.routes"));
app.use("/api/nuevoForm", require("./routes/nuevoFormulario.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/newEmp", require("./routes/nuevoEmpleado.routes"));
app.use("/api/allNForms", require("./routes/todoFormularios.routes"));
app.use("/api/EspForm", require("./routes/todoFormularios.routes"));
app.use("/api/revision", require("./routes/guardaRevision.routes"));

export default app;
