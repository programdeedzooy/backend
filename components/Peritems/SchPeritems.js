const mongoose = require("mongoose")

const Peritems = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    fruitid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    com: {
        type: String,
        required: true
    },
    Rs: {
        type: Number,
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
    items: {
        type: String,
        required: true
    },
    kg: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Peritems", Peritems)