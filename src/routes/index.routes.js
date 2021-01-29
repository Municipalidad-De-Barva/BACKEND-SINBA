const { Router } = require("express");
const router = Router();

//routes
router.get("/", (req, res) => {
  res.json({ Tittle: "Pagina Principal" });
});

router.post("/", (req, res) => {
  const { msg } = req.body;
  if (msg) {
    res.status(200).json("Done");
    console.log(msg);
  } else {
    res.status(500).json({ error: "There was an error" });
    console.log(req.body);
  }
});
module.exports = router;
