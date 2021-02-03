import {Router} from "express";
const router = Router();
import daoSolicitud from "../database/DaoSolicitud_Patente";
const soli = new daoSolicitud();

router.post("/", (req, res) => {
  const {
    nomSolicitante,
    cedulaSolicitante,
    represLegalSolicitante,
    cedulaJuriSolicitante,
    telSolicitante,
    faxSolicitante,
    dirSolicitante,
    correoEleSolicitante,
    nomPropietario,
    represLegalPropietario,
    cedulaJuriPropietario,
    dirPropietario,
    nomComercial,
    actividad,
    declaraJura,
    nomAutorizado,
    cedAutorizado,
  } = req.body;

  if (
    nomSolicitante &&
    cedulaSolicitante &&
    telSolicitante &&
    correoEleSolicitante &&
    nomPropietario &&
    nomComercial &&
    actividad &&
    declaraJura
  ) {
    /*
          if(!represLegalSolicitante || !cedulaJuriSolicitante){
            represLegalSolicitante="NA";
            cedulaJuriSolicitante="0";
          }
          if(!faxSolicitante){
            faxSolicitante="0";
          }
          if(!dirSolicitante || !represLegalPropietario || !cedulaJuriPropietario || !dirPropietario){
            dirSolicitante="NA";
            represLegalPropietario="NA";
            cedulaJuriPropietario="0";
            dirPropietario="NA";
          }
          if(!nomAutorizado || !cedAutorizado){
            nomAutorizado="NA";
            cedAutorizado="0";
          }*/

    soli.insertar_Solicitud_Patentes(
      cedulaSolicitante,
      "Contribuyente",
      nomSolicitante,
      telSolicitante,
      dirSolicitante,
      faxSolicitante,
      correoEleSolicitante,
      represLegalSolicitante,
      cedulaJuriSolicitante,
      nomPropietario,
      cedulaJuriPropietario,
      dirPropietario,
      represLegalPropietario,
      nomComercial,
      actividad,
      nomAutorizado,
      cedAutorizado,
      declaraJura,
      "Nuevo",
      function (result) {
        console.log(result);
        soli.listar_Solicitud_Patentes(function (result) {
          console.log(result);
        });
      }
    );
  } else {
    res.status(500).json({error: "Datos insuficientes"});
  }
});

export default router;
