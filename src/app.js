import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import config from "./config/config";
const app = express();

//settings
app.set("port", process.env.PORT || config.port1 || config.port2);
app.set("json spaces", 2);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const corsOptions = {
  // origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(helmet());

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

//routes
app.use(require("./routes/index.routes"));
app.use("/api/nuevoForm", require("./routes/nuevoFormulario.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/newEmp", require("./routes/nuevoEmpleado.routes"));
app.use("/api/allNForms", require("./routes/todoFormularios.routes"));
app.use("/api/EspForm", require("./routes/todoFormularios.routes"));
app.use("/api/revision", require("./routes/guardaRevision.routes"));

export default app;
