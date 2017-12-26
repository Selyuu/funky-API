"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const express = require("express");
const bodyParser = require("body-parser");
const Quote = require("./entities/codes");
const mongoose = require("mongoose");
const cors = require("cors");
const restful = require('node-restful');

// ===============
// COMMON VARIABLES
// ===============
const appPort = (process.env.PORT || 8080);
const connectionString = "mongodb://heroku_wk7zz0k5:2fgj4rr1flbc8cqu94b38g85lc@ds111565.mlab.com:11565/heroku_wk7zz0k5";

// ===============
// Express App
// ===============
const app = express();
app
	.use(cors())
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({
    extended: true
}))
	.set("port", appPort);

const codeApi = restful.model("quote", Quote.schema)
    .methods(["get", "post", "put", "delete"])
    .register(app, "/api/code");

// ===============
// DB
// ===============
mongoose.connect(connectionString);

// ===============
// SERVER
// ===============
const port = app.get("port");
const server = app.listen(port, () => {
    console.log("connectionString is: " + connectionString);
    console.log("port is: " + port);
    console.log("Server started listening...");
});
