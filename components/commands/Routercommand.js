const express = require('express')
const router = express.Router()
const com = require("./Schcommands")


router.get("/", async(req, res) => {
    // res.send("hii it is com")
    const val = await com.find()
    res.status(200).json(val)
})


router.post("/", async(req, res) => {
    console.log("i am in com post")
    const compost = await new com({
        name: req.body.name,
        id: req.body.id,
        commands: req.body.commands
    })

    const comsave = compost.save()
    res.status(200).json(comsave)

})

module.exports = router