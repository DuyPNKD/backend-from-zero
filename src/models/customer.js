const mongoose = require("mongoose");
//shape data
const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true, // trường name là bắt buộc
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    {timestamps: true}
);
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
