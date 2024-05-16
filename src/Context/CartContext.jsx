import React, { createContext, useState } from 'react'
export let CartContextCreate = createContext()


export default function CartContext({children}) {
    const [cartContity,setCartContity] = useState(0)
    let object = {cartContity,setCartContity}

  return (
    <>
        <CartContextCreate.Provider value={object}>
            {children}
        </CartContextCreate.Provider>
    
    </>
  )
}
