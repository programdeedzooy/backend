const mongoose = require("mongoose")

const deliver = mongoose.Schema({
    id: {
        type: String,
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
    },
    imgs: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    cname: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("deliver", deliver)