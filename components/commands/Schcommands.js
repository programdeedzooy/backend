const express = require("express")
const mongoose = require("mongoose")

const com = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    commands: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("com", com)