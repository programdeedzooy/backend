const express = require("express")
const app = express()
const router = express.Router()
const sign = require("./Schsign")
const cookiesPerser = require("cookie-parser")
const jwt = require("jsonwebtoken")
router.use(cookiesPerser())


const maxAge = 3 * 24 * 60 * 60
const jwthandker = (id) => {
    return jwt.sign({ id }, 'i love coding', {
        expiresIn: maxAge
    })
}


// router.use(requiredAuth())

router.get("/", async(req, res) => {
    const token = req.cookies.jwt
    if (token) {
        res.send("jwt is present")
        console.log("jwt is present")
    } else {
        res.send(" it is not jwt    ")
        console.log(" it is not jwt")
    }
    // res.send("hii")
})

const errhandler = (err) => {
    console.log(err.message, err.code)
    let errors = { name: "", email: "", pass: "", phone: "" };

    if (err.code === 11000) {
        errors.email = "that email is already taken"
    }

    if (err.message.includes('sign validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}



router.post("/", async(req, res) => {
    console.log("i am in post sign")


    try {
        const signpost = await sign.create({
            name: req.body.name,
            email: req.body.email,
            pass: req.body.pass,
            phone: req.body.phone,
            address: req.body.address,
            birthday: req.body.birthday
        })

        res.status(200).json(" it is sign")
    } catch (err) {
        // console.log(err)
        const errorss = errhandler(err)
        res.json(errorss)

    }



})




module.exports = router;