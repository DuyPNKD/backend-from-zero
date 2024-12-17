require("dotenv").config(); //Import env. Import cái này thì mới sử dụng process.env được

const express = require("express"); //import express
const path = require("path");
const configViewEngine = require("./src/config/viewEngine"); // import file config
const webRoutes = require("./src/routes/web");
const mysql = require("mysql2");

const app = express(); // tạo express application
const port = process.env.PORT || 8888; // init port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// Khai báo routes
app.use("/", webRoutes);

//test connection
// Create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3307, //default: 2206
    user: "root", //default: empty
    password: "123456",
    database: "hoidanit",
});

// A simple SELECT query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
    console.log(">>>>result: ", results); // results contains rows returned by server
    console.log(">>>>fields: ", fields); // fields contains extra meta data about results, if available
});

// run server trên port đã khởi tạo trước đấy
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
