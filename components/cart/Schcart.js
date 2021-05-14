const mongoose = require("mongoose")

const cart = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    fruitid: {
        type: Number,
        required: true
    },
    itemid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    kg: {
        type: Number,
        required: true
    },
    Rs: {
        type: Number,
        required: true
    },
    items: {
        type: String,
        required: true
    },
    imgs: {
        type: String,
        required: true
    },
    review: {
        type: Number,
        required: true
    },
    cart: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("cart", cart)