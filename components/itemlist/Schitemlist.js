const express = require("express")
const mongoose = require("mongoose")

const itemlist = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        undefined: true,
    },
    fruitid: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imgs: {
        type: String,
        required: true
    },
    Rs: {
        type: Number,
        required: true
    },
    items: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("items", itemlist)