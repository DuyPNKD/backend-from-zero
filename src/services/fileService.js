const path = require("path"); //fs: file system
const {json} = require("stream/consumers");

const uploadSingleFile = async (fileObject) => {
    let uploadPath = path.resolve(__dirname, "../public/images/uploads");

    //save => public/images/upload -> OK
    //abc.png -> abc-timestamp.png
    //upload multiple files
    let extName = path.extname(fileObject.name);

    let baseName = path.basename(fileObject.name, extName);

    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = uploadPath + "/" + finalName;
    console.log(">>> check uploadPath: ", path.resolve(__dirname, "../public/images/uploads"));

    try {
        await fileObject.mv(finalPath);
        return {
            status: "success",
            path: finalName,
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

const uploadMultipleFiles = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/uploads");

        let resultArr = [];
        let cntSuccess = 0;

        for (let i = 0; i < filesArr.length; i++) {
            let extName = path.extname(filesArr[i].name);

            let baseName = path.basename(filesArr[i].name, extName);

            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = uploadPath + "/" + finalName;

            try {
                await filesArr[i].mv(finalPath);
                resultArr.push({
                    status: "success",
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null,
                });
                cntSuccess++;
            } catch (err) {
                resultArr.push({
                    status: "failed",
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err),
                });
            }
        }

        return {
            cntSuccess: cntSuccess,
            detail: resultArr,
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles,
};
