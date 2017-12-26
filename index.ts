// <reference path="typings/index.d.ts" />
import * as express from "express";
import * as bodyParser from "body-parser";
import * as Quote from "./entities/codes";
import * as mongoose from "mongoose";
import * as cors from "cors";

const restful = require('node-restful');

// ===============
// COMMON VARIABLES
// ===============
let appPort: number =  (process.env.PORT || 8080);
let connectionString: string = `mongodb://heroku_wk7zz0k5:2fgj4rr1flbc8cqu94b38g85lc@ds111565.mlab.com:11565/heroku_wk7zz0k5`;

// ===============
// Express App
// ===============
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("port", appPort); 

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
let port:number = app.get("port");
const server = app.listen(port, () => {
    console.log("connectionString is: " + connectionString);
    console.log("port is: " + port);
    console.log("Server started listening...");
});
