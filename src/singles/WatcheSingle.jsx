import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { watchData } from '../stores/data/watch'
import { useCart } from '../stores/context/CartContext'

const WatcheSingle = () => {
    const { id } = useParams();

      const { addToCart, cartItems } = useCart();
    
    const product = watchData.find((item) => item.id === id);
    console.log(id);
  return (
    
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h1>{product.brand}</h1>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-model space">
            <h2>₹ {product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default WatcheSingle
