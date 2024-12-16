const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/abc", (req, res) => {
    res.send("Check AAAABBBBCCC!");
});

router.get("/hoidanit", (req, res) => {
    // res.send("<h1>Hoi dan IT voi Eric</h1>");
    res.render("sample.ejs");
});

module.exports = router;
