const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let uploadPath = __dirname + "/abc/" + fileObject.name;

    // Use the mv() method to place the file somewhere on your server

    //save => public/images/upload
    //abc.png -> abc-timestamp.png
    //upload multiple files
    try {
        await fileObject.mv(uploadPath);
        return {
            status: "success",
            path: "link-image",
            error: null,
        };
    } catch (error) {
        console.log(">>>check error: ", error);
        return {
            status: "false",
            path: null,
            error: JSON.stringify(error),
        };
    }
};

const uploadMultipleFiles = () => {};

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles,
};
