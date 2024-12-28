const express = require("express");
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI} = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
    res.send("Hello World with API");
});

routerAPI.get("/abc", (req, res) => {
    res.status(201).json({
        data: "Hello World first API",
    });
});

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);
routerAPI.post("/file", postUploadSingleFileAPI);

module.exports = routerAPI;
