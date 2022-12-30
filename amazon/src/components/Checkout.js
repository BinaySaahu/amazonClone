import React from "react";
import "../components/Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_title">Your shopping cart</h2>
          {/* <FlipMove> */}
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                ratings={item.ratings}
                imgsrc={item.image}
              />
            ))}
          {/* </FlipMove> */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
