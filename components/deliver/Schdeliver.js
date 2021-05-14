const mongoose = require("mongoose")

const deliver = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    kg: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("deliver", deliver)