require("dotenv").config(); //Import env. Import cái này thì mới sử dụng process.env được

const express = require("express"); //import express
const path = require("path");
const configViewEngine = require("./src/config/viewEngine"); // import file config
const webRoutes = require("./src/routes/web");
const connection = require("./src/config/database");

const app = express(); // tạo express application
const port = process.env.PORT || 8888; // init port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// Khai báo routes
app.use("/", webRoutes);

//test connection
// A simple SELECT query
// connection.query("SELECT * FROM Users u", function (err, results, fields) {
//     console.log(">>>>result home page: ", results); // results contains rows returned by server
// });

// run server trên port đã khởi tạo trước đấy
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
