const express = require("express")
const router = express.Router()
const cart = require("./Schcart")

router.get("/", async(req, res) => {
    const val = await cart.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    console.log("i am in cart post ")
    const cartpost = await new cart({
        id: req.body.id,
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


router.delete("/", async(req, res) => {
    console.log("i am cart deleting");
    const delet = await cart.remove({ _id: req.body._id })
    res.status(200).json(delet)
})

module.exports = router