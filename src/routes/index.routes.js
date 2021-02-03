import {Router} from "express";
const router = Router();

//routes
router.get("/", (req, res) => {
  res.json({
    Tittle: "Pagina Principal",
    message: "API SINBA",
  });
});

router.post("/", (req, res) => {
  const {msg} = req.body;
  if (msg) {
    res.status(200).json("Done");
    console.log(msg);
  } else {
    res.status(500).json({error: "There was an error"});
    console.log(req.body);
  }
});

export default router;
