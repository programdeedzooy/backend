const express = require("express")
const router = express.Router()
const deliver = require("./Schdeliver")

router.get("/", async(req, res) => {
    const val = deliver.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    console.log("i am in post deliver")
    const deliverpost = await new deliver({
        id: req.body.id,
        name: req.body.name,
        from: req.body.from,
        to: req.body.to,
        kg: req.body.kg,
    })
    const deliversave = deliverpost.save()
    res.status(200).json(deliversave)
})

router.delete("/", async(req, res) => {
    console.log("i am delet deliver")
    const val = await deliver.remove({ _id: req.body._id })
    res.status(200).json(val)
})

module.exports = router