const {Router} = require("express");
const router = Router();
import DaoContribuyente from "../database/DaoContribuyente";
import daoSolicitud from "../database/DaoSolicitud_Patente";

const soli = new daoSolicitud();
const contri = new DaoContribuyente();

const {object} = require("underscore");

router.post("/obtenerSolicitudPatente", async (req, res) => {
  let result = await soli.obtener_solicitud_patente(req.PK_Codigo);
  return res.status(200).json(result);
});

router.get("/", (req, res) => {
  soli.listar_Solicitud_Patentes(function (result) {
    console.log(result[0].PK_Codigo);
    res.json(result[0].PK_Codigo);
  });
});

router.post("/selected", (req, res) => {
  const {codigo} = req.body;
  if (codigo) {
    soli.obtener_Solicitud_Codigo(codigo, function (result) {
      contri.obtener_ContribuyenteID(result[0].FK_ID_Contribuyente, function (
        resu
      ) {
        var myobj = new object();

        myobj = result[0];
        myobj.Nombre = resu[0].Nombre;
        myobj.Telefono = resu[0].Telefono;
        myobj.Numero_Finca = resu[0].Numero_Finca;
        myobj.Direccion = resu[0].Direccion;
        myobj.Fax = resu[0].Fax;
        myobj.Correo = resu[0].Correo;
        var arr = [myobj];

        console.log(myobj);
        res.json(arr);
      });
    });
  } else {
    res.status(500).json({error: "Datos insuficientes"});
  }
});

router.get("/nuevas", (req, res) => {
  soli.obtener_Solicitudes_NuevasEsp(function (result) {
    //console.log(result);
    res.json(result);
  });
});

router.get("/pendientes", (req, res) => {
  soli.obtener_Solicitudes_Pendientes(function (result) {
    //console.log(result);
    res.json(result);
  });
});

router.get("/terminados", (req, res) => {
  soli.obtener_Solicitudes_Terminados(function (result) {
    //console.log(result);
    res.json(result);
  });
});

router.get("/descartados", (req, res) => {
  soli.obtener_Solicitudes_Descartados(function (result) {
    //console.log(result);
    res.json(result);
  });
});

export default router;
