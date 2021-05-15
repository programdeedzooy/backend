const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
    /* initial strio */
    /* Doto : add a strip key */
const stripe = require("stripe")("sk_test_51HG6wtGhO9MJjZPRHVZA2jdR2aLeKqd1YqAebDwfj22gBhsTEz6xO3RbhkGRH6Si0CxqN6kA2obVr0WtxrBu8KfT00c8iXm4mn")

/* initial uuid */
const uuid = require("uuid")

app.use(express.json())
app.use(cors())
const itemsarr = require("./components/itemlist/Routeitemlist")
const loginarr = require("./components/login/Routerlogin")
const Peritems = require("./components/Peritems/RoutePeritems")
const cart = require("./components/cart/Routecart")
const payment = require("./components/payment/payments")
const Deliver = require("./components/deliver/Routedeliver")

app.use("/payment", payment)
app.use("/deliver", Deliver)
app.use("/items", itemsarr)
app.use("/log", loginarr)
app.use("/Peritems", Peritems)
app.use("/cart", cart)
app.use("/", (req, res) => {
    res.send("it is working")
})

mongoose.set("useNewUrlParser", true)
mongoose.set("useUnifiedTopology", true)
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/items", (err) => {
    if (err) { console.log("error") } else { console.log("connect") }
})

app.listen(2000, (res, req) => {
    console.log("it is working on 2000")
})