import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'
function Product(props) {
    const[{basket},dispatch] = useStateValue();
    const addToBasket = ()=>{

        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:props.id,
                title:props.title,
                price:props.price,
                image:props.imgsrc,
                ratings:props.ratings,
            },
        })
        
    }
      
  return (
    <>
      <div className='product'>
            <div className="product_info">
                <p>{props.title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product_rating">
                    {Array(props.ratings).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={props.imgsrc} alt=""/>

            <button onClick={addToBasket}>Add to Cart</button>
        
        </div>
    </>
  )
}

export default Product
