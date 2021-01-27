const express = require("express");
const app = express();
const morgan = require("morgan");

const request = require("request");

//settings
app.set("port", process.env.PORT || 3001);
app.set("json spaces", 2);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
//app.use(require('./routes/index'));

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', '*');
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
app.use(require("./routes/index"));
app.use("/api/nuevoForm", require("./routes/nuevoFormulario"));
app.use("/api/admLogIn", require("./routes/logeo"));
app.use("/api/newEmp", require("./routes/nuevoEmpleado"));
app.use("/api/allNForms", require("./routes/todoFormularios"));
app.use("/api/EspForm", require("./routes/todoFormularios"));
app.use("/api/revision", require("./routes/guardaRevision"));
