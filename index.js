const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")


app.use(express.json())
app.use(cors())
const itemsarr = require("./components/itemlist/Routeitemlist")
const loginarr = require("./components/login/Routerlogin")
const Peritems = require("./components/Peritems/RoutePeritems")
const cart = require("./components/cart/Routecart")


app.use("/items", itemsarr)
app.use("/log", loginarr)
app.use("/Peritems", Peritems)
app.use("/cart", cart)
app.use("/", (req, res) => {
    res.send("it is working")
})

mongoose.set("useNewUrlParser", true)
mongoose.set("useUnifiedTopology", true)
mongoose.connect("mongodb://localhost:27017/items", (err) => {
    if (err) { console.log("error") } else { console.log("connect") }
})

app.listen(2000, (res, req) => {
    console.log("it is working on 2000")
})