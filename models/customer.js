const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    subscriptions :[{type : mongoose.Schema.Types.ObjectId, ref: "Subscrition"}] ,
    level: {type: String, default: "beginner"},
    user : {type : mongoose.Schema.Types.ObjectId, ref: "User"},

});

const Customer = new mongoose.model("Customer", CustomerSchema);

module.exports = Customer;

