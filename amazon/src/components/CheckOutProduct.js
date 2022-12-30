import React from 'react'
import { useStateValue } from '../StateProvider';
import './CheckOutProduct.css';
function CheckOutProduct({id,imgsrc,title,price,ratings}) {
    const[{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_img' src={imgsrc} alt="" />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
                {title}
            </p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(ratings).fill().map((_, i) => (
                     <p>🌟</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Cart</button>
        </div>
    </div>
  )
}
export default CheckOutProduct
