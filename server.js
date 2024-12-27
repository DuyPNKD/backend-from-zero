require("dotenv").config(); //Import env. Import cái này thì mới sử dụng process.env được

const express = require("express"); //import express
const path = require("path");
const configViewEngine = require("./src/config/viewEngine"); // import file config
const webRoutes = require("./src/routes/web");
const connection = require("./src/config/database");
const mongoose = require("mongoose");

const app = express(); // tạo express application
const port = process.env.PORT || 8888; // init port
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // Used to parse JSON bodies

// config template engine
configViewEngine(app);

// Khai báo routes
app.use("/", webRoutes);

const kittySchema = new mongoose.Schema({
    name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);
const cat = new Kitten({name: "Hoi dan IT cat"});
cat.save();

//test connection
(async () => {
    try {
        await connection();
        // run server trên port đã khởi tạo trước đấy
        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`);
        });
    } catch (error) {
        console.log(">>>>> Error connect to DB: ", error);
    }
})();
