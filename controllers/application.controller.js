"use strict";
var handler = require("../handlers/application.handler")
module.exports = {
    pong: (req,res) => handler.ping(req,res)
}