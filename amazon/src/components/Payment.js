import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const[error,setError] = useState(null);
  const[disabled,setdisable] = useState(true);
  const[processing,setprocessing] = useState("");
  const[succeeded,setsucceeded] = useState(false);
  const[clientSecret,setclientSecret] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{

    const getClientSecret = async ()=>{
      const response = await axios({
        method:"post",
        url:`/payment/create?total=${getBasketTotal(basket) *100}`
      });
      setclientSecret(response.data.clientSecret);
    }

    getClientSecret();
  },[basket])

  console.log("Client secret is: ",clientSecret)

  const handleSubmit = async (e) =>{

    e.preventDefault();
    setprocessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      // paymentIntent = payment confirmation

      db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created
      });

      setsucceeded(true);
      setError(null);
      setprocessing(false);

      dispatch({
        type:"EMPTY_BASKET"
      })

      navigate('/orders', { replace: true });
    });

  }
  const handleChange = e =>{
    setdisable(e.empty);
    setError(e.error?e.error.message:"");

  }

  const stripe = useStripe();
  const elements = useElements();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 react lane</p>
            <p>Los angeles,CA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                ratings={item.ratings}
                imgsrc={item.image}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                      <h3> Order total ({basket.length} items): <strong>{value}</strong></h3>
                      
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled = {processing || disabled || succeeded}>
                  <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                </button>
                
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
