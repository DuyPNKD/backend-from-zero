const mongoose = require("mongoose");
//shape data
const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true, // trường name là bắt buộc
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    {timestamps: true}
);
const Customer = mongoose.model("user", customerSchema);
module.exports = Customer;
