"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <reference path="typings/index.d.ts" />
var express = require("express");
var bodyParser = require("body-parser");
var Quote = require("./entities/codes");
var mongoose = require("mongoose");
var cors = require("cors");
var restful = require('node-restful');
// ===============
// COMMON VARIABLES
// ===============
var appPort = (process.env.PORT || 8080);
var connectionString = "mongodb://heroku_wk7zz0k5:2fgj4rr1flbc8cqu94b38g85lc@ds111565.mlab.com:11565/heroku_wk7zz0k5";
// ===============
// Express App
// ===============
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("port", appPort);
var codeApi = restful.model("quote", Quote.schema)
    .methods(["get", "post", "put", "delete"])
    .register(app, "/api/code");
// ===============
// DB 
// ===============
mongoose.connect(connectionString);
// ===============
// SERVER
// ===============
var port = app.get("port");
var server = app.listen(port, function () {
    // note: Only for debugging purposes to see that your variables are set correctly...
    console.log("connectionString is: " + connectionString);
    console.log("port is: " + port);
    console.log("Server started listening...");
});
//# sourceMappingURL=index.js.map