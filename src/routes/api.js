const express = require("express");
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFileAPI} = require("../controllers/apiController");

const {postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteCustomer, deleteArrayCustomer} = require("../controllers/customerController");
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
routerAPI.post("/files", postUploadMultipleFileAPI);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers", putUpdateCustomer);
routerAPI.delete("/customers", deleteCustomer);
routerAPI.delete("/customers-many", deleteArrayCustomer);

routerAPI.get("/info", (req, res) => {
    console.log(">>>>>check req.query: ", req.query);
    return res.status(200).json({
        data: req.query,
    });
});

routerAPI.get("/info/:name/:address", (req, res) => {
    console.log(">>>>>check req.query: ", req.params);
    return res.status(200).json({
        data: req.params,
    });
});
module.exports = routerAPI;
