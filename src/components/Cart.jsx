import React, { useContext, useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import CartContext, { CartContextCreate } from '../Context/CartContext'

export default function Cart() {


    let { cartContity, setCartContity } = useContext(CartContextCreate)
    // console.log(cartContity);
    let [totalPrice,setTotalPrice] = useState(0)
    let [taxPrice,setTaxPrice] = useState(0)



    let cartCart = cartContity.map((items, index) => <CartRow items={items} key={index}></CartRow>)

    useEffect(()=>{

        let total = 0
        let tax = 0
        for (let cartItem of cartContity) {

            // console.log(n)
            total = total + (cartItem.qty * cartItem.price)

            tax = (total*5/100)
            
        }
        setTotalPrice(total)
        setTaxPrice(tax)
        
    },[cartContity])

    return (
        <>
            <Header></Header>

            <>
                <div class="bg-gray-100 h-screen py-8">
                    <div class="container mx-auto px-4">
                        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
                        <div class="flex flex-col md:flex-row gap-4">
                            <div class="md:w-3/4">
                                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                                    <table class="w-full">
                                        <thead>
                                            <tr>
                                                <th class="text-left font-semibold">Product</th>
                                                <th class="text-left font-semibold">Price</th>
                                                <th class="text-left font-semibold">Quantity</th>
                                                <th class="text-left font-semibold">Total</th>
                                                <th class="text-left font-semibold">Delete</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartContity.length >= 1 ?
                                                    cartCart

                                                    :

                                                    <tr >
                                                        <td colSpan={4} className='text-red-500 text-[20px] font-bold py-5 text-center'>

                                                            Cart Is Empty
                                                        </td>
                                                    </tr>
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="md:w-1/4">
                                <div class="bg-white rounded-lg shadow-md p-6">
                                    <h2 class="text-lg font-semibold mb-4">Summary</h2>
                                    <div class="flex justify-between mb-2">
                                        <span>Subtotal</span>
                                        <span>$ {totalPrice}</span>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <span>Taxes</span>
                                        <span>$ {taxPrice}</span>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <span>Shipping</span>
                                        <span>$0.00</span>
                                    </div>
                                    <hr class="my-2" />
                                    <div class="flex justify-between mb-2">
                                        <span class="font-semibold">Total</span>
                                        <span class="font-semibold">$ {totalPrice + taxPrice}</span>
                                    </div>
                                    <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Footer></Footer>
        </>
    )
}

function CartRow({ items }) {
  
    let {id,qty,price,thumbnail,title} = items
    let { cartContity, setCartContity } = useContext(CartContextCreate)

    let [updateQty,setUpdateQty] = useState(qty)

    useEffect(()=>{

        let finalData = cartContity.filter((oldItem,index)=>{
            if (oldItem.id == id) {
                
                oldItem['qty'] = updateQty
                
            }
            return oldItem
            
        })
        setCartContity(finalData)
    },[updateQty])


    let deleteRow=()=>{

        if (window.confirm("Are You Sure Delete This Item????")) {
            let finalData = cartContity.filter((data,index)=>data.id != id)
            setCartContity(finalData)
        }
       
    }


    return (
        <>
            <tr>
                <td class="py-4">
                    <div class="flex items-center">
                        <img class="h-16 w-16 mr-4" src={thumbnail} alt="Product image" />
                        <span class="font-semibold">{title}</span>
                    </div>
                </td>
                <td class="py-4">$ {price}</td>
                <td class="py-4">
                    <div class="flex items-center">
                        <button class="border rounded-md py-2 px-4 mr-2" onClick={()=>{setUpdateQty(
                            updateQty>1 ? 
                            updateQty - 1
                            :
                            updateQty
                        )}}>-</button>
                        <span class="text-center w-8">{updateQty}</span>
                        <button class="border rounded-md py-2 px-4 ml-2" onClick={()=>{
                            setUpdateQty(

                                updateQty+1

                            )
                        }}>+</button>
                    </div>
                </td>
                <td class="py-4">${qty * price}</td>
                <td class="py-4">
                    <button class="rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300" onClick={deleteRow}>Delete</button>
                </td>

            </tr>


        </>
    )

}
