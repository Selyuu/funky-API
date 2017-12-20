import * as mongoose from "mongoose";

interface Funky {  
    title:string;
    date:string;  
    code:string;
}

interface FunkyModel extends Funky, mongoose.Document{};

var quoteSchema = new mongoose.Schema({  
    title: String,
    date: String,
    code: String
});

var Quote = mongoose.model<FunkyModel>("Quote", quoteSchema);  
export = Quote; 