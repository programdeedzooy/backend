const express = require("express")
const mongoose = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")
const sign = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter name']
    },
    address: {
        type: String,
        required: [true, 'please enter address']
    },
    birthday: {
        type: Date,
        required: [true, 'enter date of birth']
    },
    email: {
        type: String,
        required: [true, 'please enter email'],
        unique: true,
        lowercase: true,
        validator: [isEmail, 'please enter valide email']
    },
    pass: {
        type: String,
        required: [true, 'pleasr enter password'],
        minLength: [6, 'minimum password lenght is 6 characters']
    },
    phone: {
        type: Number,
        required: [true, 'pleasr enter phone number']
    }
})

//    here the function must not in arrow function because arrow function is not take the 'this' value
sign.pre("save", async function(next) {
    // console.log("user about to be created", this)
    const salt = await bcrypt.genSalt();
    this.pass = await bcrypt.hash(this.pass, salt)
    next();
})

module.exports = mongoose.model("sign", sign)