const connection = require("../config/database");
const {getAllUsers, getUserById, updateUserById, deleteUserById} = require("../services/CRUDService");

const User = require("../models/user");

const getHomePage = async (req, res) => {
    let results = [];
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

    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city]
    // );

    await User.create({
        name: name,
        email: email,
        city: city,
    });

    // console.log(">>>check result: ", results);
    res.send("Created user succeed!");
};

const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render("edit.ejs", {userEdit: user});
};

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, city, name, userId);
    // console.log(">>>check result: ", results);
    res.redirect("/");
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render("delete.ejs", {userEdit: user});
};

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await deleteUserById(id);
    res.redirect("/");
};

module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT,
    postCreatUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
};
