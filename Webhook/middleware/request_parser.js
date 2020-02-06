const url = "https://warframe-node-api.herokuapp.com/items/";

const request_parser = (req, res, next) => {
    let endParam;
    for (let param in req.body.queryResult.parameters) {

        if (req.body.queryResult.parameters[param] != '')
            endParam = `${param}/${req.body.queryResult.parameters[param]}`;
    }

    req.body.options = {
        method: 'GET',
        uri: url + endParam,
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    next();
};

module.exports = request_parser;