const {uploadSingleFile} = require("../services/fileService");
const {createCustomerService, createArrayCustomerService, getAllCustomerService, updateCustomerService, deleteCustomerService, deleteManyCustomerService} = require("../services/customerService");

module.exports = {
    postCreateCustomer: async (req, res) => {
        let {name, address, phone, email, description} = req.body;
        let imageUrl = "";

        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl,
        };

        let customer = await createCustomerService(customerData);

        return res.status(200).json({
            EC: 0,
            data: customer,
        });
    },
    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers);
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers,
            });
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers,
            });
        }
    },
    getAllCustomers: async (req, res) => {
        console.log(req.query);
        let limit = req.query.limit;
        let page = req.query.page;
        let result = null;

        if (limit && page) {
            result = await getAllCustomerService(limit, page);
        } else {
            result = await getAllCustomerService();
        }
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    putUpdateCustomer: async (req, res) => {
        let {id, name, address, phone, email, description} = req.body;
        console.log(">>>check id: ", id);
        let result = await updateCustomerService(id, name, address, phone, email, description);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    deleteCustomer: async (req, res) => {
        let id = req.body.id;
        let result = await deleteCustomerService(id);

        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    deleteArrayCustomer: async (req, res) => {
        let listId = req.body.customers;
        let result = await deleteManyCustomerService(listId);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
};
