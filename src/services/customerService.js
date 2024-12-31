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

const getAllCustomerService = async (limit, page) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            result = await Customer.find({}).skip(offset).limit(limit).exec();
        } else {
            result = await Customer.find();
        }

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

const deleteCustomerService = async (id) => {
    try {
        let result = await Customer.deleteById({_id: id});
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const deleteManyCustomerService = async (listId) => {
    try {
        let result = await Customer.delete({_id: {$in: listId}});
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
    deleteCustomerService,
    deleteManyCustomerService,
};
