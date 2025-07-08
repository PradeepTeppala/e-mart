
import React from 'react'
import { useCart } from './context/CartContext'
import Navbar from './components/Navbar';



const UserCart = () => {

    const {cartItems, addToCart, removeFromCart} = useCart()

    console.log(cartItems);

  return (
<>
<Navbar />
<div>
    <h2 className='y-cart'>Your Cart</h2>
 {cartItems.length ===0 ?
    (<p className='empty'>Your Cart is Empty</p>):
   <div>
     {cartItems.map((item)=>{
        return(
            <div className='cart-section'>
                <div className="cart-img">
                    <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
                    <h3>{item.title}</h3>
                    <h3>{item.author}</h3>
                    <h3>{item.brand}</h3> 
                    <h3>{item.company}</h3>
                    <h3>{item.model}</h3>
                    <h2>
                        Rs.{item.price}
                    </h2>
                </div>
                <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        )
    })}
   </div>

}
     
    </div>
</>
  )
}

export default UserCart