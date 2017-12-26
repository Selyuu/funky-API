"use strict";
const mongoose = require("mongoose");
;
const quoteSchema = new mongoose.Schema({
    title: String,
    date: String,
    code: String
});
const Quote = mongoose.model("Quote", quoteSchema);
module.exports = Quote;
//# sourceMappingURL=codes.js.map
