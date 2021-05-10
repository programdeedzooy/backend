const mongoose = require("mongoose")

const login = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        require: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("log", login)