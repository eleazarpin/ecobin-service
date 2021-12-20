var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
const Material = require("../models").Material;
const Resize = require("../services/resize");
const s3 = require("../services/s3storage");
var multer = require("multer");
const fetch = require("node-fetch");
const FormData = require("form-data");

const upload = multer({
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
});

/* POST enviar imagen para reconocer. */
router.post("/", upload.single("image"), async function (req, res, next) {
  try{
    let materiales = await Material.findAll();

    if (req.file) {
      const fileUpload = new Resize(req.file.buffer);
      let fileConverted = await fileUpload.resizeToJpeg();

      let fileName = Resize.filename("jpg");
      s3(fileConverted, fileName);
      console.log("Reconociendo Archivo");
      console.log(new Date());
      console.log(fileName);

      let reconocimiento = "";
      try {
        const form = new FormData();
        form.append("data", fileConverted, {
          contentType: req.file.mimetype,
          name: "imagen",
          filename: fileName,
        });

        const response = await fetch(
          "http://dev.ecobin.com.ar:3001/test_base_64",
          {
            method: "POST",
            body: form,
          }
        );

        reconocimiento = await response.text();

        switch (reconocimiento) {
          case "Organicos":
            reconocimiento = "Organico";
            break;
          case "Botella":
            reconocimiento = "Plastico";
            break;
        }

        console.log('');
        console.log('Se reconoció');
        console.log(reconocimiento);
        console.log("-----------------------")
        const result = materiales.filter((m) => m.nombre === reconocimiento);

        // Material reconocido
        if (result.length > 0 && result != undefined) {
          // console.log(`\nMaterial: ${result\n`);
          res.status(200).json(result[0]);
        } else {
          res.status(200).json({ id: 0, nombre: "No reconocido" });
        }

        // Material aleatorio
        // let materialId = Math.round(Math.random() * (materiales.length - 1));
        // res.status(200).json(materiales[materialId]);
      } catch (error) {
        console.log("Error en Reconocimiento")
        console.log(error)
        res.status(500).json({ id: 0, nombre: "No reconocido" });
      }
    } else {
      res.status(200).json({ id: 0, nombre: "No reconocido" });
    }
  } catch (error) {
    console.log("Error en conversion")
    console.log(error)
    res.status(500).json({ id: 0, nombre: "No reconocido" });
  }
});

module.exports = router;
