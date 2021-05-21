const express = require("express")
const router = express.Router()
const deliver = require("./Schdeliver")
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
            const val = await deliver.find()
            res.status(200).json(val)
            res.json("it is cookies")
            console.log("it is cookies")
        }
    } catch {
        return res.status(200).json({ err: "jwt is not present" })
    }


})

router.post("/", async(req, res) => {
    console.log("i am in post deliver")
    console.log(res.body)
    const deliverpost = await new deliver({
        id: req.body.id,
        name: req.body.name,
        from: req.body.from,
        to: req.body.to,
        street: req.body.street,
        kg: req.body.kg,
        imgs: req.body.imgs,
        phone: req.body.phone,
        cname: req.body.cname
    })
    const deliversave = deliverpost.save()
    res.status(200).json(deliversave)
})

router.delete("/", async(req, res) => {
    console.log("i am delet deliver")
    const val = await deliver.remove({ _id: req.body.idd })
    res.status(200).json(val)
})

module.exports = router