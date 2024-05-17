import React, { useContext } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import CartContext, { CartContextCreate } from '../Context/CartContext'

export default function Cart() {

    let { cartContity, setCartContity } = useContext(CartContextCreate)
    console.log(cartContity);
    return (
        <>
            <Header></Header>
            {
            cartContity.length>=1 ? 

                cartContity.map((items, index) => {

                    return (

                        <>
                            <div class="container mx-auto px-4 py-8">
                                <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                                    <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
                                    <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                        Checkout
                                    </button>
                                </div>
                                <div class="mt-8">
                                    <div class="flex flex-col md:flex-row border-b border-gray-400 py-4">
                                        <div class="flex-shrink-0">
                                            <img src={items.thumbnail} alt="Product image" class="w-32 h-32 object-cover" />
                                        </div>
                                        <div class="mt-4 md:mt-0 md:ml-6">
                                            <h2 class="text-lg font-bold">{items.category} </h2>
                                            <p class="mt-2 text-gray-600">{items.brand}</p>

                                            <p class="mt-2 text-gray-600">{items.description}</p>
                                            <div class="mt-4 flex items-center">
                                                <span class="mr-2 text-gray-600">Quantity:</span>
                                                <div class="flex items-center">
                                                    <button class="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
                                                    <span class="mx-2 text-gray-600">1</span>
                                                    <button class="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
                                                </div>
                                                <span class="ml-auto font-bold">${items.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="flex justify-end items-center mt-8">
                                    <span class="text-gray-600 mr-4">Subtotal:</span>
                                    <span class="text-xl font-bold">$35.00</span>
                                </div>
                            </div>
                        </>
                    )
                }

                )
            :

            <div className='text-red-500 text-[20px] font-bold py-5 text-center'>

            Cart Is Empty
        </div>
            }

            <Footer></Footer>
        </>
    )
}
