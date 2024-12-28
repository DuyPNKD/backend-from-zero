const express = require("express");
const routerAPI = express.Router();
const {getUsersAPI} = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
    res.send("Hello World with API");
});

routerAPI.get("/abc", (req, res) => {
    res.status(201).json({
        data: "Hello World first API",
    });
});

routerAPI.get("/users", getUsersAPI);

module.exports = routerAPI;
