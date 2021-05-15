const express = require("express")
const router = express.Router()
const uuid = require("uuid")
const stripe = require("stripe")("pk_test_51HG6wtGhO9MJjZPRusMbmhlx67KhTSCnlrFfcgq0IerPfCJmzb9zWAGVzfFte5zfYz7oG2a8VzkUu5RxH9INSj8T000PKUHpnU")



router.post("/", (req, res) => {
    const { product, token } = req.body;
    console.log("product", product)
    console.log("price", product.price)
    const idempontencyKey = uuid()

    return stripe.customers.create({
            email: token.email,
            source: token.id
        }).then(customer => {
            stripe.charges.create({
                amount: product.price * 100,
                currency: "INR",
                customer: customer.id,
                receipt_email: token.email,
                description: product.name,
                shapping: {
                    name: token.card.name,
                    address: {
                        country: token.card.address_country
                    }
                }
            }, { idempontencyKey })
        }).then(result => res.status(200).json(result))
        .catch(err => res.status(502).json(err))
})

module.exports = router