"use strict";
const API_VERSION_1 = "v1";
let controller = require("../controllers/application.controller");
module.exports = (app) => {
    app.get(`/app/${API_VERSION_1}/ping`, (req,res) => controller.pong(req,res));
}