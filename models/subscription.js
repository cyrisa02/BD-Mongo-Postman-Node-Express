const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
    beginningDate : { type: Date, required: true},
    endDate : { type: Date, required: true},
    payementMethod : { type: "string", required: true},
    amountPaid : { type: Number, default: 0},
    customer: {
        type: mongoose.Schema.Types.ObjectId, ref: "Customer",
    },

});

const Subscription = new mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;

