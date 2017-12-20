"use strict";
var mongoose = require("mongoose");
;
var quoteSchema = new mongoose.Schema({
    title: String,
    date: String,
    code: String
});
var Quote = mongoose.model("Quote", quoteSchema);
module.exports = Quote;
//# sourceMappingURL=codes.js.map