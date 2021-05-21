const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cookiesPerser = require("cookie-parser")
const cors = require("cors")
const jwt = require("jsonwebtoken")

/* initial strio */
/* Doto : add a strip key */
const stripe = require("stripe")("sk_test_51HG6wtGhO9MJjZPRHVZA2jdR2aLeKqd1YqAebDwfj22gBhsTEz6xO3RbhkGRH6Si0CxqN6kA2obVr0WtxrBu8KfT00c8iXm4mn")

/* initial uuid */
const uuid = require("uuid")



// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))

app.use(cookiesPerser())




const maxAge = 3 * 24 * 60 * 60
const jwthandker = (id) => {
    return jwt.sign({ id }, 'i love coding', {
        expiresIn: maxAge
    })
}


const itemsarr = require("./components/itemlist/Routeitemlist")
const loginarr = require("./components/login/Routerlogin")
const Peritems = require("./components/Peritems/RoutePeritems")
const cart = require("./components/cart/Routecart")
const payment = require("./components/payment/payments")
const Deliver = require("./components/deliver/Routedeliver")
const sign = require("./components/signin/RouterSign")
const cookies = require("./components/cookies/set-cookies")
const getcookies = require("./components/cookies/read-cookies")
const logout = require("./components/logout/logout")
const com = require("./components/commands/Routercommand")

app.use("/payment", payment)
app.use("/deliver", Deliver)
app.use("/items", itemsarr)
app.use("/log", loginarr)
app.use("/Peritems", Peritems)
app.use("/cart", cart)
app.use("/set-cookies", cookies)
app.use("/read-cookies", getcookies)
app.use("/sign", sign)
app.use("/logout", logout)
app.use("/com", com)
app.use("/", (req, res) => {
    res.send("it is working")
})

// cookie

// app.get("/", (req, res) => {
//     res.setHeader("Set-Cookie", "newUsers=true")
//     res.send('you got the  cookies')
// })






mongoose.set("useNewUrlParser", true)
mongoose.set("useUnifiedTopology", true)
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/items", (err) => {
    if (err) { console.log("error") } else { console.log("connect") }
})

app.listen(2000, (res, req) => {
    console.log("it is working on 2000")
})