const express = require("express")
const router = express.Router()
const cart = require("./Schcart")
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
            const val = await cart.find()
            res.status(200).json(val)
            res.json("it is cookies")
            console.log("it is cookies")
        }
    } catch {
        return res.status(200).json({ err: "jwt is not present" })
    }
})

router.post("/", async(req, res) => {
    console.log("i am in cart post ")
    const cartpost = await new cart({
        id: req.body.id,
        itemid: req.body.itemid,
        fruitid: req.body.fruitid,
        name: req.body.name,
        kg: req.body.kg,
        Rs: req.body.Rs,
        items: req.body.items,
        imgs: req.body.imgs,
        review: req.body.review,
        cart: req.body.cart,
    })
    const cartsave = cartpost.save()
    res.status(200).json(cartsave)
})


router.put("/", async(req, res) => {
    try {
        console.log("i am in put")
        const updatecart = await cart.updateOne({ id: req.body.id }, { $set: { name: req.body.name, imgs: req.body.imgs } })
        res.status(200).json(updatecart)
    } catch {
        res.json({ "err": err })
    }
})


router.delete("/", async(req, res) => {
    console.log("i am cart deleting");
    console.log(req.body)
    const delet = await cart.remove({ _id: req.body.idd })
    res.status(200).json(delet)
})

module.exports = router