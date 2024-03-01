const express = require('express');
const router = express.Router();
const {addVehicle, updateVehicle, deleteVehicle, searchVehicle, addImage} = require("../controllers/vehicle-controller");
const multer = require("multer");
const {upload} = require("../middlewarees/multer")

router.post("/add", addVehicle);
router.put("/update/:vehi_num", updateVehicle);
router.delete("/delete/:vehi_num", deleteVehicle);
router.get('/search', searchVehicle);
router.post('/addImage/:vehi_num',upload.single("file"), addImage);

module.exports = router;