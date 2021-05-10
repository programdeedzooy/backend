const express = require("express")
const router = express.Router()
const log = require("./Schlogin")

router.get("/", async(req, res) => {
    const val = await log.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    console.log("i am in log")

    const logdetial = await new log({
        name: req.body.name,
        birthday: req.body.birthday,
        phone: req.body.phone,
        email: req.body.email,
        pass: req.body.pass,
        address: req.body.address
    })

    const logsave = await logdetial.save()
    res.status(200).json(logsave)
})

module.exports = router