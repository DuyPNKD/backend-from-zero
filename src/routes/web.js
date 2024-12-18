const express = require("express");
const router = express.Router();
const {getHomePage, getABC, getHoiDanIT, postCreatUser} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);

router.post("/create-user", postCreatUser);

module.exports = router;
