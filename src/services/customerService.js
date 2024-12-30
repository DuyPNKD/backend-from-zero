const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image,
        });
        return result;
    } catch (error) {
        console.log(">>>error: ", error);
        return null;
    }
};

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log("error: ", error);
        return null;
    }
};

const getAllCustomerService = async (arr) => {
    try {
        let result = await Customer.find();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const updateCustomerService = async (id, name, address, phone, email, description) => {
    try {
        let result = await Customer.updateOne(
            {_id: id},
            {
                name: name,
                address: address,
                phone: phone,
                email: email,
                description: description,
            }
        );
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    updateCustomerService,
};
