require("dotenv").config(); //Import env. Import cái này thì mới sử dụng process.env được

const express = require("express"); //import express
const path = require("path");
const configViewEngine = require("./src/config/viewEngine"); // import file config
const webRoutes = require("./src/routes/web");
const apiRoutes = require("./src/routes/api");
const connection = require("./src/config/database");
const fileUpload = require("express-fileupload");
const {MongoClient} = require("mongodb");

const app = express(); // tạo express application
const port = process.env.PORT || 8888; // init port
const hostname = process.env.HOST_NAME;

//condif fileupload
app.use(fileUpload());

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); // for form data

// config template engine
configViewEngine(app);

// Khai báo routes
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

//test connection
(async () => {
    try {
        //connection của mongoose
        // await connection();

        //connection của mongodb driver

        // Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);
        // Database Name
        const dbName = process.env.DB_NAME;
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        const collection = db.collection("customers");

        // collection.insertOne({
        //     test: "ha Noi",
        // });
        // console.log(">>>find = ", await collection.findOne({test: "ha Noi"}));
        //

        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`);
        });
    } catch (error) {
        console.log(">>>>> Error connect to DB: ", error);
    }
})();
