const { json } = require("body-parser")
const route = require("color-convert/route")
const express = require("express")
const router = express.Router()
const items = require("./Schitemlist")


router.get("/", async(req, res) => {
    const val = await items.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    console.log("i am in items")
    const itemss = await new items({
        id: req.body.id,
        fruitid: req.body.fruitid,
        name: req.body.name,
        com: req.body.com,
        Rs: req.body.Rs,
        imgs: req.body.imgs,
        review: req.body.review,
        items: req.body.items,
        kg: req.body.kg
    })
    const itemssave = await itemss.save()
    res.status(200).json(itemssave)
})

module.exports = router