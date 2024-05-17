import React, { createContext, useEffect, useState } from 'react'
export let CartContextCreate = createContext()


export default function CartContext({children}) {
  
  let CartData = JSON.parse(localStorage.getItem('CartStorage')) ?? []
  let [cartContity,setCartContity] = useState(CartData)  
  
  let object = {cartContity,setCartContity}
  useEffect(()=>{
    localStorage.setItem('CartStorage',JSON.stringify(cartContity))
    
  },[cartContity])

  return (
    <>
        <CartContextCreate.Provider value={object}>
            {children}
        </CartContextCreate.Provider>
    
    </>
  )
}
