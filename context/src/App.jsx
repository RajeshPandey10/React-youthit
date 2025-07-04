// import React, { use, useContext } from 'react'
// import Counter from './components/Counter'
// import { CounterContext } from './context/CounterContext'

// const App = () => {
//   // const countState = use(CounterContext)
//   // console.log(countState)
//   const { count } = useContext(CounterContext)
  
//   return (
//    <div className="app">

//     <h1>count is {count}</h1>
//     <Counter/>
//     <Counter/>
   
//    </div>
//   )
// }

// export default App
import React, { useContext } from 'react'
import Product from './components/Product'
import { CartContext } from './context/CartContext'
import Cart from './components/Cart'

const App = () => {
  const {items,setItems} = useContext(CartContext)
  return (
    <div>
      <Product name="mac" price="10000"/>
      <Product name="macbook" price="101000"/>
      <Product name="mac1" price="1900"/>
      <Cart/>
    </div>
  )
}

export default App