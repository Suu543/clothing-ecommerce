const mongoose = require("mongoose");
const { ObjectId } = mongoose.ObjectId;

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        index: true
    },
    role: {
        type: String,
        default: "subscribe"
    },
    cart: {
        type: Array,
        default: []
    },
    address: String,
    // wishlist: [ { type: ObjectId, ref: "Product"}]
    },
    { timestamps: true}
);

module.exports = mongoose.model('User', userSchema);