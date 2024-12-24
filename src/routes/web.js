const express = require("express");
const router = express.Router();
const {getHomePage, getABC, getHoiDanIT, postCreatUser, getCreatePage, getUpdatePage} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);

router.get("/create", getCreatePage);
router.get("/update", getUpdatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreatUser);

module.exports = router;
