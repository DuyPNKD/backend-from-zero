const connection = require("../config/database");
const {getAllUsers, getUserById} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", {listUsers: results});
};

const getABC = (req, res) => {
    res.send("Check AAAABBBBCCC!");
};

const getHoiDanIT = (req, res) => {
    res.render("sample.ejs");
};

const postCreatUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // let {email, name, city} = req.body;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city]
    );

    // console.log(">>>check result: ", results);
    res.send("Created user succeed!");
};

const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserById(userId);

    res.render("edit.ejs", {user: user});
};

module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT,
    postCreatUser,
    getCreatePage,
    getUpdatePage,
};
