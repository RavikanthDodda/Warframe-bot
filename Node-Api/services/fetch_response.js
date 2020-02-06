const googleResponse = require("./google_response");


const getResponse = (items, itemName, type = "default", callback) => {
    let item = items.filter(item => item.name.toLowerCase().replace(" ", "") === itemName.toLowerCase().replace(" ", ""))[0];
    if (item) {
        delete item.patchlogs;
        let simpleResponse = `Here are the details of ${item.name}`;
        googleResponse.getTable(item, type, simpleResponse, function (tableResponse) {
            callback(tableResponse);
        });

    }
    else {
        googleResponse.getError("No such item", function (errorResponse) {
            callback(errorResponse);
        })
    }
}

exports.getResponse = getResponse;