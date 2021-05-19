const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const sign = require("../signin/Schsign")
const maxAge = 3 * 24 * 60 * 60


router.get("/", async(req, res) => {
    // const token = jwthandker(sig._id)
    res.cookie("jwt", " ", { httpOnly: true, maxAge: 1, sameSite: 'none', secure: true })
    res.cookie("guna", true, { httpOnly: true, maxAge: maxAge * 1000, sameSite: 'none', secure: true })
    res.status(200).json({token:"",login:"logout"})
})

module.exports = router