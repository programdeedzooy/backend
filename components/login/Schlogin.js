const mongoose = require("mongoose")

const login = mongoose.Schema({


    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        require: true
    },

})

module.exports = mongoose.model("log", login)