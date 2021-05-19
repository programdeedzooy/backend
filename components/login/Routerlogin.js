const express = require("express")
const router = express.Router()
const log = require("./Schlogin")
const sign = require("../signin/Schsign")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookiesPerser = require("cookie-parser")

var iddd = "";

router.use(cookiesPerser())
const maxAge = 3 * 24 * 60 * 60
const jwthandker = (id) => {
    return jwt.sign({ id }, 'i love coding', {
        expiresIn: maxAge
    })
}



router.post("/", async(req, res) => {
    console.log("i am in log")
    console.log(req.body)
    const sig = await sign.findOne({ email: req.body.email })
    if (sig) {

        if (await bcrypt.compare(req.body.pass, sig.pass)) {
            const token = jwthandker(sig._id)
            iddd = sig._id
            res.cookie("jwt", token, { httpOnly: true, sameSite: 'none', secure: true })
            res.cookie("guna", true, { httpOnly: true, maxAge: maxAge * 1000, sameSite: 'none', secure: true })
            res.status(200).json({ login: sig._id, token: token })

        } else {
            // res.json("it is not user")
            res.status(200).json({ err: "it is not corect pass" })
        }
    } else {
        const val = await sign.find()
        res.status(200).json({ err: "it is not user email" })
    }

})


router.get("/", async(req, res) => {
    try {
        const cookies = req.cookies["jwt"]
            // res.send(cookies)
        const clains = jwt.verify(cookies, 'i love coding')
        if (!clains) {
            console.log("it is not cookies")
            res.json("it is not cookies")
        } else {
            res.status(200).json({ id: iddd })
            console.log("it is cookies")
        }
    } catch {
        return res.status(200).json({ err: "jwt is not present" })
    }

})


// router.get("/:id", async(req, res) => {
//     console.log("i am in getid items")
//     console.log(req.body)
//     const getid = await Peritems.findById(req.params.id)
//     res.status(200).json(getid)
// })

module.exports = router