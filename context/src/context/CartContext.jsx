import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [items,setItems] = useState([])
    return(
        <CartContext.Provider value={{items,setItems}}>
            {children}
        </CartContext.Provider>
    )
}