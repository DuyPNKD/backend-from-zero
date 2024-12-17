const express = require("express");
const router = express.Router();
const {getHomePage, getABC, getHoiDanIT} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);

module.exports = router;
