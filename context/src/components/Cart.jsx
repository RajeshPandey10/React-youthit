import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {items}= useContext(CartContext)
    const total = items.reduce((a,b)=>a+ parseInt(b.price),0)
    
  return (
    <>
    <h1>Your Cart</h1>
    {items && (
      <div>
        {items.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{item.name}</h3>
            <p>Price: Rs{item.price}</p>
          </div>
        ))}
      <div>total:Rs.{total}</div>
        <p><strong>Total Items: {items.length}</strong></p>
      </div>
    )}
    </>
  )
}

export default Cart