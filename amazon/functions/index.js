const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51LRdGMSHvE1Ajub2ZSuDBwTNPA6icvuC29OHcW0tAotqyIpPfzqVaAUhLPtLhtUyQfRsugrbE2qL4fOJ3by72XcK00YSarZiUd');
const app = express();

app.use(cors({origin:true}));
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send(('Hello world'));
})

app.post('/payment/create', async (req,res)=>{
    const total = req.query.total;
    console.log("payment re recieved of ",total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    })

    res.status(201).send({
        clientSecret:paymentIntent.client_secret
    });

})

//http://127.0.0.1:5001/clone-78bcd/us-central1/api

exports.api = functions.https.onRequest(app);
