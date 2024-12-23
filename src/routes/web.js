const express = require("express");
const router = express.Router();
const {getHomePage, getABC, getHoiDanIT, postCreatUser, getCreatePage} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);
router.get("/create", getCreatePage);

router.post("/create-user", postCreatUser);

module.exports = router;
