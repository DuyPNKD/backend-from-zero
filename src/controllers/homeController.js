const connection = require("../config/database");

const getHomePage = (req, res) => {
    return res.render("home.ejs");
};

const getABC = (req, res) => {
    res.send("Check AAAABBBBCCC!");
};

const getHoiDanIT = (req, res) => {
    res.render("sample.ejs");
};

const postCreatUser = (req, res) => {
    console.log(">>> req.body: ", req.body);
    res.send("Create a new user");
};

module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT,
    postCreatUser,
};
