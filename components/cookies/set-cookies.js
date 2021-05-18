const express = require("express")
const router = express.Router()
const cookiesPerser = require("cookie-parser")


router.get("/", (req, res) => {
    // res.setHeader("set-cookie", "newUsers=true")
    res.cookie("guna", false, { httpOnly: true })
    res.send('you got the  cookies')
})



module.exports = router