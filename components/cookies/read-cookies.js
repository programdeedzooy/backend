const express = require("express")
const router = express.Router()
const cookiesPerser = require("cookie-parser")

router.get("/", (req, res) => {
    const cookies = req.cookies
    console.log(cookies)
    res.json(cookies)
})


module.exports = router