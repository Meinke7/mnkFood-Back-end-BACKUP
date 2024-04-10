const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const platesRoutes = Router();

const PlatesImageController = require("../Controllers/PlatesImageController.js");
const PlatesController = require("../Controllers/PlatesController.js");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated.js");

const platesController = new PlatesController();
const platesImageController = new PlatesImageController();

const upload = multer(uploadConfig.MULTER_PLATE);

platesRoutes.use(ensureAuthenticated);

platesRoutes.get("/", platesController.index);
platesRoutes.post("/", upload.single("imgPlate"), platesController.create);
platesRoutes.get("/:id", platesController.show);
platesRoutes.delete("/:id", upload.single("imgPlate"), platesController.delete);
platesRoutes.put("/:id", platesController.update);

platesRoutes.patch(
  "/:id",
  upload.single("imgPlate"),
  platesImageController.update
);

module.exports = platesRoutes;
