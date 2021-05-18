const { json } = require("body-parser")
const route = require("color-convert/route")
const express = require("express")
const router = express.Router()
const items = require("./Schitemlist")
const jwt = require("jsonwebtoken")

router.get("/", async(req, res) => {
    const cookies = req.cookies["jwt"]
        // res.send(cookies)
    console.log("jwt ", cookies)
    const clains = jwt.verify(cookies, 'i love coding')
    console.log(clains)

    try {


        if (!clains) {

            console.log("it is not cookies")
            res.json("it is not cookies")
        } else {
            const val = await items.find()
            res.status(200).json(val)
            res.json("it is cookies")
            console.log("it is cookies")
        }
    } catch {
        return res.status(200).json({ err: "jwt is not present" })
    }


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