import {Router} from "express";
const router = Router();
const path = require("path");
const fs = require("fs");

router.post("/upload", (req, res) => {
  console.log(req.file);

  const ext = path.extname(req.file.originalname).toLocaleLowerCase();
  // console.log("ext", ext);

  fs.rename(
    req.file.path,
    `./src/public/uploads/${req.file.filename}${ext}`,
    () => {
      res.send("received");
    }
  );
});

router.get("/enviar", (req, res) => {
  res.render("/uploads/80377ef2750b65ff18fa6c26d424f072.jpeg");
});
export default router;
