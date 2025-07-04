import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Product = (props) => {
    const {items,setItems} = useContext(CartContext)
    function click(){
       setItems([...items,
        {name:props.name,
        price:props.price}])
       alert(`${props.name} added to cart`)
    }
  return (
   <div>
    <h3>{props.name}</h3>
    <p>price: rs{props.price}</p>
    <button onClick={click}>Add to cart</button>
   </div>
  )
}

export default Product