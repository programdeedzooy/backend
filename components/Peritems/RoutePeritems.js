const express = require("express")
const router = express.Router()
const Peritems = require("./SchPeritems")

router.get("/", async(req, res) => {
    const val = await Peritems.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    console.log(" i am in Periterms post")
    const Peritemspost = await new Peritems({
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
    const Peritemssave = await Peritemspost.save()
    res.status(200).json(Peritemspost)
})

module.exports = router